import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ApiDashboardComponent } from './api-dashboard.component';

const routes: Routes = [{ path: '', component: ApiDashboardComponent }];


@NgModule({
  declarations: [ApiDashboardComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,
    
  ]
})
export class ApiDashboardModule { }
