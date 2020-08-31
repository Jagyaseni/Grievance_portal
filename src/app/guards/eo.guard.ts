import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EoGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.length > 0) {
        if (localStorage.getItem('isLoggedIn') === 'true' && localStorage.getItem('userLevel') === 'EST') {
          return true;
        }
        else {
          return this.router.parseUrl('/login');
        }
      }
      else {
        return this.router.parseUrl('/');
      }


  }
  
}
