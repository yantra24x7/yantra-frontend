import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavbarService } from '../navbar.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  show1: boolean;
  show2: boolean;
  drawer:any;
  // private nav:any;
  // nav:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public nav: NavbarService, private route: Router, private breakpointObserver: BreakpointObserver) {
    this.nav.hide();

   }

  ngOnInit() {
  }
  view() {
    this.show2 = !this.show2
  }
  toggle() {
    this.show1 = !this.show1
  }
  // close() {
  //   Swal.fire({
  //     title: 'Are you sure want to logout?',
  //     // icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes',
  //     cancelButtonText: 'No'
  //   }).then((result) => {
  //     if (result) {
  //       localStorage.clear();
  //       this.route.navigateByUrl('');
  //     }
  //   });
  // }
  close() {
    Swal.fire({
      title: 'Are you sure want to logout?',
      // type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        this.route.navigateByUrl('');
      }
    });
  }
}

