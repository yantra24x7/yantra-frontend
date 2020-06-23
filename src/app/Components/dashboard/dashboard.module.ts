import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SharedModule} from '../shared/shared.module';
import { DashboardService} from '../../Service/app/dashboard.service';
import { HighchartsChartModule } from 'highcharts-angular';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule,
    HighchartsChartModule
  ],
    providers:[DashboardService]
})
export class DashboardModule { 
  closeSideNav() {
    // if (this.drawer._mode=='over') {
    //   this.drawer.close();
    // }
  }

}
