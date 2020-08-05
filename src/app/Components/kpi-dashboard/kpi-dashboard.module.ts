import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule} from '../shared/shared.module';
import { KpiDashboardComponent } from './kpi-dashboard.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: KpiDashboardComponent }];

@NgModule({
  declarations: [KpiDashboardComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule,HttpClientModule,
    NgCircleProgressModule.forRoot({
      "radius": 50,
      "space": -12,
      "outerStrokeWidth": 12,
      "innerStrokeWidth": 12,
      "showSubtitle": true,
      "subtitle": 'OEE'
    })
  ]
})
export class KpiDashboardModule { }
