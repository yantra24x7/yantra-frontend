import { Component, OnInit, Inject } from '@angular/core';
import { NavbarService } from '../../Nav/navbar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { MatTableDataSource } from '@angular/material';
import { UserService } from 'src/app/Service/app/user.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ToastrService } from 'ngx-toastr';
export interface User { }

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'email', 'phone_no', 'role', 'action'];
  dataSource = new MatTableDataSource();
  users: any;
  roles: any;
  myLoader = false;


  constructor(private nav: NavbarService, private fb: FormBuilder, public dialog: MatDialog, private userService: UserService, private toast: ToastrService) {
    this.nav.show();
  }
  ngOnInit() {
    this.getUsers();
    this.getRoles();
  }

  getUsers() {
    this.userService.user_get().pipe(untilDestroyed(this)).subscribe(res => {
      console.log(res);
      this.users = res;
      this.dataSource = new MatTableDataSource(this.users)

    })
  }
  getRoles() {
    this.myLoader = true;
    this.userService.role_get().pipe(untilDestroyed(this)).subscribe(res => {
      console.log(res);
      this.myLoader = false;

      this.roles = res;
    })

  }

  user(): void {
    const dialogRef = this.dialog.open(User, {
      width: '450px',
      height: 'auto',
      data: { new: 'new' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }
  user_edit(user, id) {
    const dialogRef = this.dialog.open(User, {
      width: '450px',
      height: 'auto',
      data: { edit_user: user, user_id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

  user_delete(id) {
    Swal.fire({
      title: 'Are you sure want to delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.userService.user_delete(id).pipe(untilDestroyed(this)).subscribe(res => {
          this.toast.success('Deleted Successfully');
          this.ngOnInit();
        }, error => {
          this.toast.error('Something Went Wrong');
        });
      }
    });
  }
  ngOnDestroy() { }
}
@Component({
  selector: 'user-page',
  templateUrl: 'user.html',
  styleUrls: ['./user-management.component.scss']

})
export class User {
  userForm: any;
  value: any;
  editMode = false;
  roles: any;

  constructor(public dialogRef: MatDialogRef<User>, @Inject(MAT_DIALOG_DATA) public data: User, private fb: FormBuilder, private user: UserService, private toast: ToastrService, private userService: UserService) {
    this.value = data;
    console.log(this.value)
  }

  ngOnInit() {
    this.getRoles();
    if (this.value.new) {
      this.userForm = this.fb.group({
        first_name: ["", Validators.required],
        last_name: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
        phone_no: ["", Validators.required],
        remarks: ["", Validators.required],
        role: ["", Validators.required]
      })
    } else {
      this.editMode = true;
      this.userForm = this.fb.group({
        first_name: [this.value.edit_user.first_name, Validators.required],
        last_name: [this.value.edit_user.last_name, Validators.required],
        email: [this.value.edit_user.email, Validators.required],
        // password: [this.value.edit_user.duplicate_password,],
        phone_no: [this.value.edit_user.phone_no, Validators.required],
        remarks: [this.value.edit_user.remarks, Validators.required],
        role: [this.value.edit_user.role, Validators.required]
      })
    }
  }
  getRoles() {
    // this.myLoader = true;
    this.userService.role_get().pipe(untilDestroyed(this)).subscribe(res => {
      console.log(res);
      // this.myLoader = false;

      this.roles = res;
    })

  }

  submit() {
    console.log(this.userForm.value)
    if (this.userForm.invalid) {
      return;
    }
    if (this.value.new) {
      this.user.user_create(this.userForm.value).pipe(untilDestroyed(this)).subscribe(res => {
        console.log(res);
        this.dialogRef.close();
        this.toast.success('Created Successfully')
      })
    } else {
      this.user.user_put(this.userForm.value, this.value.user_id).pipe(untilDestroyed(this)).subscribe(res => {
        console.log(res);
        this.dialogRef.close();
        this.toast.success('Updated Successfully')
      })
    }
  }
  ngOnDestroy() { }
}

