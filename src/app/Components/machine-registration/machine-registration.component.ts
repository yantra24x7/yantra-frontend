import { Component, OnInit,Inject } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import Swal from 'sweetalert2'
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { MachineService } from 'src/app/Service/app/machine.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-machine-registration',
  templateUrl: './machine-registration.component.html',
  styleUrls: ['./machine-registration.component.scss']
})
export class MachineRegistrationComponent implements OnInit {

  machine_list: any;
  myLoader = false;
  constructor(private fb:FormBuilder,private nav:NavbarService, private machine: MachineService) {
    this.nav.show()
   }
  
  
  

  ngOnInit() {
    this.getMachines();
  }
  getMachines() {
    this.myLoader = true;

    this.machine.machine_get().pipe(untilDestroyed(this)).subscribe( res => {
      console.log(res);
      this.myLoader = false;

      this.machine_list = res;
    })
  }
  delete(){
    Swal.fire('Are you sure want to delete?')
  }
  ngOnDestroy() {}

}

