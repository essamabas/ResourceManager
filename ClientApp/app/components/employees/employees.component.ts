
import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';

import { DataService } from '../core/services/data.service';
import { IEmployee } from '../shared/interfaces';
import { propertyResolver } from '../shared/property-resolver';
import { Http } from '@angular/http';

@Component({ 
  //moduleId: module.id,
  selector: 'employees', 
  template: require('./employees.component.html'),
  styles: [require('./employees.styles.css')]
})
export class EmployeesComponent implements OnInit {

  title: string;
  filterText: string;
  employees: IEmployee[] = [];
  filteredEmployees: IEmployee[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;

  constructor(private dataService: DataService) {    
   }
  
  ngOnInit() {
    this.title = 'Employees';
    this.filterText = 'Filter Employees:';
    this.displayMode = DisplayModeEnum.Card;

    this.dataService.getEmployees()
        .subscribe((employees: IEmployee[]) => {
          this.employees = this.filteredEmployees = employees;
        });
    
  }

  changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
  }


  filterChanged(data: string) {
    if (data && this.employees) {
        data = data.toUpperCase();
        let props = ['firstName', 'lastName', 'address', 'city', 'state.name', 'taskTotal'];
        let filtered = this.employees.filter(item => {
            let match = false;
            for (let prop of props) {
                if (prop.indexOf('.') > -1) {
                   var value = propertyResolver.resolve(prop, item);
                   if (value && value.toUpperCase().indexOf(data) > -1) {
                      match = true;
                      break;
                   }
                   continue;
                }
                
                //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                  match = true;
                  break;
                }
            };
            return match;
        });
        this.filteredEmployees = filtered;
    }
    else {
      this.filteredEmployees = this.employees;
    }
  }
}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
