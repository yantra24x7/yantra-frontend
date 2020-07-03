import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AlarmComponent } from './alarm.component';
import { SharedModule} from '../shared/shared.module';
import { AlarmService} from '../../Service/app/alarm.service';
import { HighchartsChartModule } from 'highcharts-angular';

const routes: Routes = [{ path: '', component: AlarmComponent }];

@NgModule({
  declarations: [AlarmComponent],
  imports: [RouterModule.forChild(routes),
  CommonModule,SharedModule,HighchartsChartModule
  ],
  providers:[AlarmService]
})
export class AlarmModule { }
