import { Component, OnInit, Inject } from '@angular/core';
import { NavbarService } from '../../Nav/navbar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MatTableDataSource } from '@angular/material';
import { OperatorService } from 'src/app/Service/app/operator.service';
export interface Operator { }

@Component({
  selector: 'app-operator-registration',
  templateUrl: './operator-registration.component.html',
  styleUrls: ['./operator-registration.component.scss']
})
export class OperatorRegistrationComponent implements OnInit {
  myLoader = false;
  operators: any;
  displayedColumns: string[] = ['name', 'id', 'desc', 'action'];
  dataSource = new MatTableDataSource();
  toast: any;
  constructor(private nav: NavbarService, private fb: FormBuilder, public dialog: MatDialog, private operator_service: OperatorService) {
    this.nav.show();
  }

  ngOnInit() {
    this.getOperators();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(operator, {
      width: '450px',
      height: 'auto',
      data: { new: 'new' }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getOperators();
    });
  }

  getOperators() {
   this. myLoader = true;
   this.operator_service.operator_get().pipe(untilDestroyed(this)).subscribe(res => {
      console.log(res)
      this. myLoader = false;
       this.operators = res;
      this.dataSource = new MatTableDataSource(this.operators);
    })
  }

  operator_edit(data, id) {
    const dialogRef = this.dialog.open(operator, {
      width: '450px',
      height: 'auto',
      data: { edit_operator: data, operator_id: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getOperators();
    });
  }


  operator_delete(id) {
    Swal.fire({
      title: 'Are you sure want to delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.operator_service.operator_delete(id).pipe(untilDestroyed(this)).subscribe(res => {
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
  selector: 'operator',
  templateUrl: 'operator.html',
  styleUrls: ['./operator-registration.component.scss']


})
export class operator {

  operatorForm: FormGroup;
  value: any;

  constructor(public dialogRef: MatDialogRef<operator>, @Inject(MAT_DIALOG_DATA) public data: Operator, private fb: FormBuilder, private operator: OperatorService) {
    this.value = data;
  }


  ngOnInit() {
    if (this.value.new) {
      this.operatorForm = this.fb.group({
        operator_name: ["",Validators.required],
        operator_spec_id: ["",Validators.required],
        description: ["",Validators.required],
      })
    } else {
      this.operatorForm = this.fb.group({
        operator_name: [this.value.edit_operator.operator_name,],
        operator_spec_id: [this.value.edit_operator.operator_spec_id,],
        description: [this.value.edit_operator.description,],
      })
    }
  }
  submit() {
    if(this.operatorForm.invalid) {
      return;
    }
    console.log(this.operatorForm.value);
    if (this.value.new) {
    this.operator.operator_create(this.operatorForm.value).pipe(untilDestroyed(this)).subscribe(res => {
      console.log(res)
      this.dialogRef.close();
    })
  } else {
    this.operator.operator_put(this.operatorForm.value, this.value.operator_id).pipe(untilDestroyed(this)).subscribe(res => {
      console.log(res)
      this.dialogRef.close();
    })
  }
  }
  ngOnDestroy() { }


}