import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent }   from './employee.component';
import { EmployeeTasksComponent } from './employee-tasks.component';
import { EmployeeDetailsComponent } from './employee-details.component';
import { EmployeeEditComponent } from './employee-edit.component';
import { IRouting } from '../shared/interfaces';

const routes: Routes = [
  { 
    path: '', 
    component: EmployeeComponent,
    children: [
      { path:'tasks',  component: EmployeeTasksComponent },
      { path:'details', component: EmployeeDetailsComponent },
      { path:'edit', component: EmployeeEditComponent }
    ]
  }
];

export const employeeRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components: [ EmployeeComponent, EmployeeTasksComponent, EmployeeDetailsComponent, EmployeeEditComponent]
};

