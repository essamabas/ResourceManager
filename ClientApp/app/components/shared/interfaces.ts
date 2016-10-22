import { ModuleWithProviders } from '@angular/core';

export interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    city: string;
    //state: IState;
    orderTotal?: number;
}

export interface IState {
    abbreviation: string;
    name: string;
}

export interface ITask {
    employeeId: number;
    taskItems: ITaskItem[];
}

export interface ITaskItem {
    id: number;
    title: string;
    description?: string;
    duration: number;
}

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}