
import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';

import { CounterComponent } from './components/counter/counter.component';
import { EmployeesModule } from './components/employees/employees.module';
import { CoreModule } from './components/core/core.module';
import { SharedModule } from './components/shared/shared.module';
import { app_routing } from './app.routing';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        app_routing,
        //EmployeesModule,
        CoreModule,
        SharedModule
    ]
})
export class AppModule {
}
