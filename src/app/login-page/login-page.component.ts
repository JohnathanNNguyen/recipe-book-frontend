import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginPage: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  login = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });
  register = new FormGroup({
    fName: new FormControl(null, [
      Validators.required,
      Validators.maxLength(45),
    ]),
    lName: new FormControl(null, [
      Validators.required,
      Validators.maxLength(45),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  onLogin() {}
  onRegister() {}
}
