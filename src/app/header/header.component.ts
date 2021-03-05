import { Component, OnInit } from '@angular/core';
import { JwtService } from '../jwt.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public readonly jwtService: JwtService,
    public readonly rest: RestService
  ) {}

  ngOnInit(): void {}

  onLogout() {
    this.jwtService.removeJwt();
  }
}
