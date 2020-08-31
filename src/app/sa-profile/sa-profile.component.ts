import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sa-profile',
  templateUrl: './sa-profile.component.html',
  styleUrls: ['./sa-profile.component.scss']
})
export class SaProfileComponent implements OnInit {
  profileForm = new FormGroup({
    pfNum: new FormControl({
      value: '',
      disabled: true
    }, Validators.required),
    email: new FormControl('', Validators.required),
    firstName: new FormControl({
      value: '',
      disabled: true
    }, Validators.required),
    lastName: new FormControl({
      value: '',
      disabled: true
    }, Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
    mobileNum: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService, private router: Router) { }

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
    this.router.navigate(['/sadashboard']);
  }
}
