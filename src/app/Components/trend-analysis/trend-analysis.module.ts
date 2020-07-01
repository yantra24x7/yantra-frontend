import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { TrendAnalysisRoutingModule } from './trend-analysis-routing.module';
import { TrendAnalysisComponent } from './trend-analysis.component';

@NgModule({
  declarations: [TrendAnalysisComponent],
  imports: [
    CommonModule,SharedModule,
    TrendAnalysisRoutingModule
  ]
})
export class TrendAnalysisModule { }
