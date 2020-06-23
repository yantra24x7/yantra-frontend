import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShiftComponent,Add } from './shift.component';
import { SharedModule} from '../shared/shared.module';
const routes: Routes = [{ path: '',component: ShiftComponent }];

@NgModule({
  declarations: [ShiftComponent,Add],
  imports: [RouterModule.forChild(routes),
  CommonModule,SharedModule,
  ],
  entryComponents:[Add]
})
export class ShiftModule { }
