import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor( private auth:AuthService,
    private roter:Router) { }


    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
      console.log(state);
      console.log(next);
      if (this.auth.isAuthenticated()) {
        return true;
      }
      return false;
    }

}
