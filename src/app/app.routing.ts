import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: 'employees/:id', loadChildren: 'app/employee/employee.module'},
  { path: '**', pathMatch:'full', redirectTo: '/employees' } //catch any unfound routes and redirect to home page
];

export const app_routing = RouterModule.forRoot(app_routes);
