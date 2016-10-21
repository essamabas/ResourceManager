import { Injectable } from '@angular/core';

import { IEmployee, ITask } from '../../shared/interfaces';

@Injectable()
export class TrackByService {
  
  employee(index:number, employee: IEmployee) {
    return employee.id;
  }
  
}