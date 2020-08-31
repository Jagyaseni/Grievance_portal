import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fire: AngularFirestore, private router: Router) { }

  loginWithUserIDPassword(formData) {
    let pass;
    let userLevel;
    const usersRef = this.fire.collection('users').doc(formData.userID).get();
    usersRef.subscribe((val) => {
      if (val.data() != null) {
        pass = val.data().password;
        userLevel = val.data().userLevel;
        if (pass === formData.password) {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userID', formData.userID);
          localStorage.setItem('userLevel', userLevel);
          this.redirectToDash();
        }
        else {
          console.log('Incorrect Password');
        }
      } else {
        console.log('UserID doesnt Exist');
      }
    });
  }

  redirectToDash() {
    switch (localStorage.getItem('userLevel')) {
      case 'EMPLOYEE':
        this.router.navigate(['/empdb']);
        break;
      case 'DEALER':
        this.router.navigate(['/ddashboard']);
        break;
      case 'CHOS':
        this.router.navigate(['/chosdashboard']);
        break;
      case 'PC':
        this.router.navigate(['/pcdashboard']);
        break;
      case 'EST':
        this.router.navigate(['/']);
        break;
      case 'ADMIN':
        this.router.navigate(['/adashboard']);
        break;
      case 'SUPER_ADMIN':
        this.router.navigate(['/sadashboard']);
        break;
      default:
        console.log('User Level was not found!');
        this.router.navigate(['/']);
        break;
    }
  }
}
