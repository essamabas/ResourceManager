import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { IEmployee, ITask, IState } from '../../shared/interfaces';

@Injectable()
export class DataService {
  
    employeesBaseUrl: string = '/api/employees';
    tasksBaseUrl: string = '/api/tasks';
    employees: IEmployee[];
    tasks: ITask[];
    states: IState[];

    constructor(private http: Http) { }
    
    getEmployees() : Observable<IEmployee[]> {
        return this.http.get(this.employeesBaseUrl)
                    .map((res: Response) => {
                        this.employees = res.json();
                        return this.employees;
                    })
                    .catch(this.handleError);
    }
    
    getEmployee(id: number) : Observable<IEmployee> {
        return this.http.get(this.employeesBaseUrl + '/' + id)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    getTasks(id: number) : Observable<ITask[]> {
      return this.http.get(this.tasksBaseUrl + '/' + id)
                .map((res: Response) => res.json())
                .catch(this.handleError);               
    }
    
    updateEmployee(employee: IEmployee) : Observable<boolean> {
        return this.http.put(this.employeesBaseUrl + '/' + employee.id, employee)
                   .map((res: Response) => res.json())
                   .catch(this.handleError);  
    }
    
    getStates(): Observable<IState[]> {
        return this.http.get('/api/states')
                   .map((res: Response) => res.json())
                   .catch(this.handleError); 
    }
    
    private handleError(error: any) {
        console.error('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }

    //Not using now but leaving since they show how to create
    //and work with custom observables

    private findEmployeeObservable(id: number) : Observable<IEmployee> {        
        return this.createObservable(this.filterEmployees(id));
    }
    
    private filterEmployees(id: number) : IEmployee {
        const custs = this.employees.filter((cust) => cust.id === id);
        return (custs.length) ? custs[0] : null;
    }
    
    private createObservable(data: any) : Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }
    
    private filterStates(stateAbbreviation: string) {
        const filteredStates = this.states.filter((state) => state.abbreviation === stateAbbreviation);
        return (filteredStates.length) ? filteredStates[0] : null;
    }

}
