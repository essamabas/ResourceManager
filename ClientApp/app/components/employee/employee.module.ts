import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../shared/shared.module';
import { employeeRouting } from './employee.routing';

@NgModule({
  imports:      [ CommonModule, employeeRouting.routes, SharedModule ],
  declarations: [ employeeRouting.components ]
})
export default class AppModule { }