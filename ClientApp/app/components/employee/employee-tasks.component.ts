import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../core/services/data.service';
import { IEmployee, ITask, ITaskItem } from '../shared/interfaces';

@Component({
  moduleId: module.id,
  selector: 'employee-tasks',
  templateUrl: 'employee-tasks.component.html'
})
export class EmployeeTasksComponent implements OnInit {

  filteredTasks: ITask[] = [];
  employee: IEmployee;
  sub: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
      //Subscribe to params so if it changes we pick it up. Don't technically need that here
      //since param won't be changing while component is alive. Could use this.route.snapshot.parent.params["id"] to simplify it.
      this.sub = this.route.parent.params.subscribe(params => {
        let id = +params['id'];
        this.dataService.getTasks(id).subscribe((tasks: ITask[]) => {
          this.filteredTasks = tasks;
        });
        this.dataService.getEmployee(id).subscribe((employee: IEmployee) => {
          this.employee = employee;
        });
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  taskTrackBy(index: number, task: ITaskItem) {
    return task.id;
  }
  
  taskItemTrackBy(index: number, taskItem: any) {
    return taskItem.id;
  }

}