import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { IEmployee } from '../shared/interfaces';
import { TrackByService } from '../core/services/trackby.service';

@Component({ 
  //moduleId: module.id,
  selector: 'employees-card', 
  template: require('./employees-card.component.html'),
  styles: [require('./employees.component.css')]
  //When using OnPush detectors, then the framework will check an OnPush 
  //component when any of its input properties changes, when it fires 
  //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  //changeDetection: ChangeDetectionStrategy.OnPush 
})
export class EmployeesCardComponent implements OnInit {

  @Input() employees: IEmployee[] = [];
  
  constructor(public trackby: TrackByService) { }
  
  ngOnInit() {

  }

}

