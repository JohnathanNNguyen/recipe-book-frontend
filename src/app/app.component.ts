import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as AOS from 'aos';
import { JwtService } from './jwt.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { RestService } from './rest.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public usersRecipes: [];
  constructor(
    private readonly restService: RestService,
    private readonly jwt: JwtService,
    private dialog: MatDialog
  ) {}
  ngOnInit() {
    if (this.jwt.getJwt()) {
      this.restService.getRecipes().then((res) => {
        this.usersRecipes = res.data;
        this.restService.usersRecipes = this.usersRecipes;
      });
    }
    // else {
    //   this.dialog.open(LoginPageComponent);
    // }
    AOS.init();
  }
}
