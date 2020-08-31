import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  

  constructor(private userService: UserService, private router: Router) { }

  profileForm = new FormGroup({
    pfNum: new FormControl({
      value: /* this.userData.pfNum */'',
      disabled: true
    }, Validators.required),
    email: new FormControl(/* this.userData.email */'', Validators.required),
    firstName: new FormControl({
      value: /* this.userData.firstName */'',
      disabled: true
    }, Validators.required),
    lastName: new FormControl({
      value: /* this.userData.lastName */'',
      disabled: true
    }, Validators.required),
    city: new FormControl(/* this.userData.city */'', Validators.required),
    state: new FormControl(/* this.userData.state */'', Validators.required),
    postalCode: new FormControl(/* this.userData.postalCode */'', Validators.required),
    mobileNum: new FormControl(/* this.userData.mobileNum */'', Validators.required)
  });

  ngOnInit(): void {

    this.userService.getData(localStorage.getItem('userID')).subscribe((val: User) => {
      this.profileForm.setValue({
        pfNum: val.pfNum,
        email: val.email,
        firstName: val.firstName,
        lastName: val.lastName,
        city: val.city,
        state: val.state,
        postalCode: val.postalCode,
        mobileNum: val.mobileNum
      });
    });
  }

  onSubmit() {
    this.userService.updateData(this.profileForm.value, localStorage.getItem('userID'));
    alert('Profile Updated!');
    this.router.navigate(['/adashboard']);
  }

}
