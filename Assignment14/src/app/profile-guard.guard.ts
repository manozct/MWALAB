import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {DbService} from "./db.service";

@Injectable()
export class ProfileGuardGuard implements CanActivate {
  id:number;
  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(next.params['id'])
    this.id=next.params['id'];
    if(this.db.filterId(this.id)){
     return true;
    }
    this.router.navigate(['homepage']);
   // return false;
  }
  constructor(private db:DbService,private router:Router){
    console.log('constructor');



  }
}
