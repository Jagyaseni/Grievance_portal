import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) { }

  redirectToDash() {
    switch (localStorage.getItem('userLevel')) {
      case 'EMPLOYEE':
        return '/empdb';
      case 'DEALER':
        return '/ddashboard';
      case 'CHOS':
        return '/chosdashboard';
      case 'PC':
        return '/pcdashboard';
      case 'EST':
        return '/';
      case 'ADMIN':
        return '/adashboard';
      case 'SUPER_ADMIN':
        return '/sadashboard';
      default:
        console.log('User Level was not found!');
        return '/';
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.length > 0) {
        if (localStorage.getItem('isLoggedIn') === 'true') {
          return this.router.parseUrl(this.redirectToDash());
        }
        else {
          return true;
        }
      }
      else {
        return true;
      }
  }
}
