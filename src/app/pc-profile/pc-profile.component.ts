import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pc-profile',
  templateUrl: './pc-profile.component.html',
  styleUrls: ['./pc-profile.component.scss']
})
export class PcProfileComponent implements OnInit {
  profileForm = new FormGroup({
    pfNum: new FormControl(''),
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
    console.log('Pc Profile Submitted!');
  }

}
