import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { JwtService } from '../jwt.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginPage: boolean = true;
  loginForm: FormGroup;
  registerForm: FormGroup;
  public errorMsg: string = '';
  public errMessage: string = '';
  constructor(
    private readonly fb: FormBuilder,
    private readonly restService: RestService,
    private readonly jwtService: JwtService,
    public dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4)]],
    });
    this.registerForm = this.fb.group({
      fName: [
        null,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ],
      ],
      lName: [
        null,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {}

  onLogin() {
    this.restService
      .logIn({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      })
      .then((res) => {
        if (res.error) {
          this.errorMsg = res.msg;
        } else {
          this.jwtService.setJwt(res.data);
        }
      });
  }

  onRegister() {
    this.restService.register(this.registerForm.value).then((res) => {
      if (res.error) {
        this.errMessage = res.msg;
      } else {
        this.jwtService.setJwt(res.data);
      }
    });
  }
}
