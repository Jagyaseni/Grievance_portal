import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-com-status',
  templateUrl: './com-status.component.html',
  styleUrls: ['./com-status.component.scss']
})
export class ComStatusComponent implements OnInit {
  complaintForm = new FormGroup({
    trackingID: new FormControl('', Validators.required),
    pfNum: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  onComplaintSubmit() {
    console.log(this.complaintForm.value);
  }

}
