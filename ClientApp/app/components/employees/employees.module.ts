import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../shared/shared.module';
import { employeesRouting } from './employees.routing';

@NgModule({
  imports:      [ CommonModule, employeesRouting.routes, SharedModule ],
  declarations: [ employeesRouting.components ]
})
export class EmployeesModule { }