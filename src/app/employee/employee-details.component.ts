import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { IEmployee } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';

@Component({
  moduleId: module.id,
  selector: 'employee-details',
  templateUrl: 'employee-details.component.html'
})
export class EmployeeDetailsComponent implements OnInit {

  employee: IEmployee;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
      //Subscribe to params so if it changes we pick it up. Don't technically need that here
      //since param won't be changing while component is alive. Could use this.route.snapshot.parent.params["id"] to simplify it.
      this.sub = this.route.parent.params.subscribe(params => {
        let id = +params['id'];
        this.dataService.getEmployee(id)
            .subscribe((employee: IEmployee) => this.employee = employee);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}