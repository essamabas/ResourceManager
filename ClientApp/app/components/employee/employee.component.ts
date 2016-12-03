import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  selector: 'tasks',
  templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit {
  
    displayMode: EmployeeDisplayModeEnum;
    displayModeEnum = EmployeeDisplayModeEnum;
  
    constructor(private router: Router) { }

    ngOnInit() {
      //Next line needs a better technique. This is the easiest way
      //to get child route path that I've found so far.
      //Hoping this will be easier with later builds of router
      const path = this.router.url.split('/')[3];
      switch (path) {
        case 'details':
          this.displayMode = EmployeeDisplayModeEnum.Details;
          break;
        case 'tasks':
          this.displayMode = EmployeeDisplayModeEnum.Tasks;
          break;
        case 'edit':
          this.displayMode = EmployeeDisplayModeEnum.Edit;
          break;
      }
    }

}

enum EmployeeDisplayModeEnum {
  Details=0,
  Tasks=1,
  Edit=2
}
