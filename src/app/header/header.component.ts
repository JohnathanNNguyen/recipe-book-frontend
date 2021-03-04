import { Component, OnInit } from '@angular/core';
import { JwtService } from '../jwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public readonly jwtService: JwtService) {}

  ngOnInit(): void {}

  onLogout() {
    this.jwtService.removeJwt();
  }
}
