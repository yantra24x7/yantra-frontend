import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineRegistrationComponent, } from './machine-registration.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule} from '../shared/shared.module';

const routes: Routes = [{ path: '', component: MachineRegistrationComponent }];

@NgModule({
  declarations: [MachineRegistrationComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule
    
  ],

})
export class MachineRegistrationModule { }
