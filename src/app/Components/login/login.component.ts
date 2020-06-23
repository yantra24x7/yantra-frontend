import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavbarService } from '../../Nav/navbar.service';
import { LoginService } from '../../Service/app/login.service';
import { Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  hide: boolean = true;

  constructor(private fb: FormBuilder,  private nav: NavbarService, private service: LoginService, private router: Router) {
    this.nav.hide();
  }
  ngOnInit() {
    console.log(this.nav.visible)
    this.login = this.fb.group({
      email: ["", Validators.email],
      password: ["", Validators.required]
    })
  }
  logintest(val) {
    if(this.login.invalid) {
      return;
    }
    console.log(val);
    this.service.signin(val).pipe(untilDestroyed(this)).subscribe(res => {
      console.log(res);
      if (res === false) {
        alert('The Username or Password is incorrect')
      } else {
        this.router.navigateByUrl('/dashboard');
      }
      localStorage.setItem('token', res.access_token);
      localStorage.setItem('tenant_id',res.tenant_id);
      localStorage.setItem('usertype_id',res.usertype_id);
      localStorage.setItem('role_id',res.role_id);
      localStorage.setItem('id',res.id)
          })

  }
  

  ngOnDestroy() {}


}


