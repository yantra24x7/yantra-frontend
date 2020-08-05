import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OperatorViewRoutingModule } from './operator-view-routing.module';
import { OperatorViewComponent } from './operator-view.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [OperatorViewComponent],
  imports: [
    CommonModule,SharedModule,
    OperatorViewRoutingModule,
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
export class OperatorViewModule { }
