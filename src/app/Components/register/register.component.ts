import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { NavbarService} from '../../Nav/navbar.service';
import { RegisterService} from '../../Service/app/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  login:FormGroup;
  checkModel: any;
  constructor(private fb:FormBuilder,private nav:NavbarService,private register:RegisterService,private route:Router) { 
  }

  ngOnInit() {
    this.login=this.fb.group({
      first_name:["",Validators.required],last_name:["",Validators.required], email_id:["",Validators.email],password:["",Validators.required], phone_number:["",Validators.required], remarks:["",Validators.required], tenant_name:["",Validators.required],address_line1:["",Validators.required], address_line2:["",Validators.required],
      city:["",Validators.required], state:["",Validators.required],country:["",Validators.required], pincode:["",Validators.required], isactive:[false,]

})
  }
  
  onChange($event) {
    this.checkModel = $event.target.checked;
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault();
    }
   }
   logintest(val)
   {
     console.log(val)
     this.login.reset();
     this.register.senddata(val).subscribe(res =>{
       console.log(res);
       if (res === true) {
        alert('Thank You for registering with Yantra24x7')
      }
     })
   }
  
}
