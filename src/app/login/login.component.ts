import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userID: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    this.loginForm.setValue({
      userID: this.loginForm.value.userID.trim(),
      password: this.loginForm.value.password.trim()
    });
    this.auth.loginWithUserIDPassword(this.loginForm.value);
  }
}
