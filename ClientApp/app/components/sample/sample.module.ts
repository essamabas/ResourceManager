
import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { sampleRouting } from './sample.routing';

@NgModule({
  imports:      [
      CommonModule, 
      FormsModule,
      sampleRouting.routes ],
  declarations: [ sampleRouting.components ]
})

export class SampleModule { }