import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dealer-profile',
  templateUrl: './dealer-profile.component.html',
  styleUrls: ['./dealer-profile.component.scss']
})
export class DealerProfileComponent implements OnInit {
  profileForm = new FormGroup({
    pfNum: new FormControl(''),
    user: new FormControl(''),
    email: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    postalCode: new FormControl(''),
    mobileNum: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Dealer Profile Submitted!');
  }

}
