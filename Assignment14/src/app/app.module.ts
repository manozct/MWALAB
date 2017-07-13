import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { HomepageComponentComponent } from './homepage-component/homepage-component.component';
import { StudnetComponentComponent } from './studnet-component/studnet-component.component';
import {DbService} from './db.service';
import {RouterModule} from "@angular/router";
import {myRoutes} from "./myRouter";
import {DataService} from "../../../../ServiceExample/src/app/data.service";
import { ChildStudentComponent } from './child-student/child-student.component';
import {ProfileGuardGuard} from "./profile-guard.guard";

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    HomepageComponentComponent,
    StudnetComponentComponent,
    ChildStudentComponent
  ],
  imports: [
    BrowserModule,myRoutes
  ],
  providers: [DbService,ProfileGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
