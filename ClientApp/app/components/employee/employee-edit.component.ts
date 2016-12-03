import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../core/services/data.service';
import { IEmployee, IState } from '../shared/interfaces';

@Component({
  selector: 'employee-edit',
  templateUrl: 'employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit {

  employee: IEmployee = 
  {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: ''
  };
  states: IState[];
  errorMessage: string;
  sub: Subscription;
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService) { }

  ngOnInit() {
      //Subscribe to params so if it changes we pick it up. Don't technically need that here
      //since param won't be changing while component is alive. Could use this.route.snapshot.parent.params["id"] to simplify it.
      this.sub = this.route.parent.params.subscribe(params => {
        let id = +params['id'];
        this.dataService.getEmployee(id).subscribe((employee: IEmployee) => {
          //Quick and dirty clone used in case user cancels out of form
          const cust = JSON.stringify(employee);
          this.employee = JSON.parse(cust);
        });
      });

      this.dataService.getStates().subscribe((states: IState[]) => this.states = states);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  onSubmit() {
      this.dataService.updateEmployee(this.employee)
        .subscribe((status: boolean) => {
          if (status) {
            this.router.navigate(['/']);
          }
          else {
            this.errorMessage = 'Unable to save employee';
          }
      });
  }
  
  onCancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/']);
  }

}