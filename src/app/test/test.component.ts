import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private userService: UserService) { }

  addForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    pfNum: new FormControl('', Validators.required),
    mobileNum: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    postalCode: new FormControl('')
  });

  editForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    pfNum: new FormControl({
      value: '',
      disabled: true
    }, Validators.required),
    mobileNum: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    postalCode: new FormControl('')
  });

  editSearchForm = new FormGroup({
    pfNum: new FormControl('', Validators.required)
  });

  deleteForm = new FormGroup({
    firstName: new FormControl({
      value: '',
      disabled: true
    }),
    lastName: new FormControl({
      value: '',
      disabled: true
    }),
    email: new FormControl({
      value: '',
      disabled: true
    }),
    pfNum: new FormControl({
      value: '',
      disabled: true
    }, Validators.required),
    mobileNum: new FormControl({
      value: '',
      disabled: true
    }),
    city: new FormControl({
      value: '',
      disabled: true
    }),
    state: new FormControl({
      value: '',
      disabled: true
    }),
    postalCode: new FormControl({
      value: '',
      disabled: true
    })
  });

  deleteSearchForm = new FormGroup({
    pfNum: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  editFormValidator() {
    const formRef = this.editForm.value;
    if (
      formRef.firstName !== '' ||
      formRef.lastName !== '' ||
      formRef.mobileNum !== '' ||
      formRef.email !== '' ||
      formRef.city !== '' ||
      formRef.state !== '' ||
      formRef.postalCode !== ''
    ) {
      return true;
    } else {
      return false;
    }
  }

  deleteFormValidator() {
    const formRef = this.deleteForm.value;
    if (
      formRef.firstName !== '' ||
      formRef.lastName !== '' ||
      formRef.mobileNum !== '' ||
      formRef.email !== '' ||
      formRef.city !== '' ||
      formRef.state !== '' ||
      formRef.postalCode !== ''
    ) {
      return true;
    } else {
      return false;
    }
  }

  addEmployee() {
    const formRef = this.addForm.value;
    this.userService.createNewEmployee(
      formRef.pfNum,
      formRef.firstName,
      formRef.lastName,
      formRef.mobileNum,
      formRef.email,
      formRef.city,
      formRef.state,
      formRef.postalCode
    );
    this.addForm.reset();
  }

  editEmployee() {
    const formRef = this.editForm.value;
    this.userService.updateData({
      pfNum: formRef.pfNum,
      email: formRef.email,
      firstName: formRef.firstName,
      lastName: formRef.lastName,
      mobileNum: formRef.mobileNum,
      city: formRef.city,
      state: formRef.state,
      postalCode: formRef.postalCode,
    }, formRef.pfNum);
  }

  editSearch() {
    this.userService.getData(this.editSearchForm.value.pfNum).subscribe((val: User) => {
      this.editForm.setValue({
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

  deleteEmployee() {
    this.userService.deleteUser(this.deleteSearchForm.value.pfNum);
  }

  deleteSearch() {
    this.userService.getData(this.deleteSearchForm.value.pfNum).subscribe((val: User) => {
      this.deleteForm.setValue({
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
}
