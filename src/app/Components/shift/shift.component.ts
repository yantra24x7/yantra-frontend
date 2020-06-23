import { Component, OnInit, Inject } from '@angular/core';
import { NavbarService } from '../../Nav/navbar.service';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material';
import { ShiftService } from 'src/app/Service/app/shift.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
export interface Add { }


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {
  controls:any;
  myLoader = false;
  shifts: any;
  displayedColumns: string[] = ['start_time', 'end_time', 'total_hour', 'action'];
  dataSource = new MatTableDataSource();
  constructor(private nav: NavbarService, public dialog: MatDialog, private shift: ShiftService, private toast: ToastrService)  {
    this.nav.show();
  }

  ngOnInit() {
    this.getShifts();
  }
  getShifts() {
    this.myLoader = true;

    this.shift.shift_get().pipe(untilDestroyed(this)).subscribe(res => {
      console.log(res);
      this.myLoader = false;

      this.shifts = res;
      this.dataSource = new MatTableDataSource(this.shifts);
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Add, {
      width: '450px',
      data: { new: 'new' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getShifts();
    });
  }

  shift_edit(shift, id) {
    const dialogRef = this.dialog.open(Add, {
      width: '450px',
      data: { edit_shift: shift, shift_id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getShifts();
    });
  }

  shift_delete(id) {
    Swal.fire({
      title: 'Are you sure want to delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.shift.shift_delete(id).pipe(untilDestroyed(this)).subscribe(res => {
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
  selector: 'add-page',
  templateUrl: 'add.html',
  styleUrls: ['./shift.component.scss']


})
export class Add {
  shiftForm: FormGroup;
  difference: any;
  value: any;
  myLoader= false;

  constructor(public dialogRef: MatDialogRef<Add>, @Inject(MAT_DIALOG_DATA) public data: Add, private fb: FormBuilder, private shift: ShiftService, private toast: ToastrService) {
    this.value = data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if (this.value.new) {
      this.shiftForm = this.fb.group({
        start_time: ["",Validators.required],
        end_time: ["",Validators.required],
        shift_no: ["",Validators.required],
        start_day: ["",Validators.required],
        end_day: ["",Validators.required],
      })
    } else {
      this.shiftForm = this.fb.group({
        start_time: [this.value.edit_shift.start_time,],
        end_time: [this.value.edit_shift.end_time,],
        shift_no: [this.value.edit_shift.shift_no,],
        start_day: [this.value.edit_shift.start_day,],
        end_day: [this.value.edit_shift.end_day,],
      })
    }
  }
  submit() {
    console.log(this.shiftForm.value)
    if(this.shiftForm.invalid) {
      return;
    }
    let data = this.shiftForm.value;
    // var timeStart = new Date("01/01/2010 " + data.start_time);
    // var timeEnd = new Date("01/01/2010 " + data.end_time);
    // var difference = timeEnd - timeStart;
    // console.log(difference)
    // // var hours = Math.floor(difference / 1000 / 60 / 60);
    // // console.log(hours)
    // var diff = difference * 1000 * 60 * 60;
    // var minutes = Math.floor(diff / 1000 / 60);
    // console.log(minutes)
    // console.log(duration);
         

    if (this.value.new) {
      this.myLoader = true;

      this.shift.shift_create(data).pipe(untilDestroyed(this)).subscribe(res => {
        console.log(res);
        this.myLoader = false;

        this.toast.success('Created Successfully')
        this.dialogRef.close();
      })
    } else {
      this.myLoader = true;

      this.shift.shift_put(data, this.value.shift_id).pipe(untilDestroyed(this)).subscribe( res => {
        console.log(res);
        this.myLoader = false;

        this.toast.success('Updated Successfully')
        this.dialogRef.close();
      })
    }
  }
  ngOnDestroy() { }


}