/**
 * Created by manozct on 7/13/2017.
 */
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponentComponent} from "./homepage-component/homepage-component.component";
import {StudnetComponentComponent} from "./studnet-component/studnet-component.component";
import {ChildStudentComponent} from "./child-student/child-student.component";
import {ProfileGuardGuard} from "./profile-guard.guard";

const mainRoot: Routes = [

  {path: 'homepage', component: HomepageComponentComponent},
  {path: 'students', component: StudnetComponentComponent,
    children:[
      {path:'profile/:id',component:ChildStudentComponent,canActivate:[ProfileGuardGuard]}
    ]
  },


];


export const myRoutes = RouterModule.forRoot(mainRoot);
