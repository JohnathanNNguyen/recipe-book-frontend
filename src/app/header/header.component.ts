import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JwtService } from '../jwt.service';
import { LoginPageComponent } from '../login-page/login-page.component';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public readonly jwtService: JwtService,
    public readonly rest: RestService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onLogout() {
    this.jwtService.removeJwt();
  }
  onLogin() {
    this.dialog.open(LoginPageComponent);
  }
}
