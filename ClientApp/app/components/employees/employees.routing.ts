import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import { EmployeesCardComponent } from './employees-card.component';
import { EmployeesGridComponent } from './employees-grid.component';
import { FilterTextboxComponent } from '../filterTextbox/filterTextbox.component';
import { IRouting } from '../shared/interfaces';

const routes: Routes = [
  //{ path: '', pathMatch:'full', redirectTo: '/employees' },
  { path: 'employees', component: EmployeesComponent}
];

export const employeesRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components: [ EmployeesComponent, EmployeesCardComponent, EmployeesGridComponent, FilterTextboxComponent ]
};