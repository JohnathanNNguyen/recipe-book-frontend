import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { JwtService } from './jwt.service';
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
    private readonly jwt: JwtService
  ) {}
  ngOnInit() {
    if (this.jwt.getJwt()) {
      this.restService.getRecipes().then((res) => {
        this.usersRecipes = res.data;
        this.restService.usersRecipes = this.usersRecipes;
      });
    }
    AOS.init();
  }
}
