import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(
    private readonly http: HttpClient,
    private readonly jwtService: JwtService
  ) {}

  register(body): Promise<any> {
    return this.http.post(`${environment.apiUrl}/register`, body).toPromise();
  }

  // logIn(body: { email: string; password: string }): Promise<any> {
  //   return this.http.post(`${environment.apiUrl}/log-in`, body).toPromise();
  // }
  logIn(body): Promise<any> {
    return this.http.post(`${environment.apiUrl}/log-in`, body).toPromise();
  }

  getRecipes(): Promise<any> {
    const jwt = this.jwtService.getJwt();
    return this.http
      .get(`${environment.apiUrl}/recipes`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .toPromise();
  }

  saveRecipe(body): Promise<any> {
    const jwt = this.jwtService.getJwt();
    return this.http
      .put(`${environment.apiUrl}/save`, body, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .toPromise();
  }

  deleteRecipe(id): Promise<any> {
    const jwt = this.jwtService.getJwt();
    return this.http
      .delete(`${environment.apiUrl}/delete-recipe/${id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .toPromise();
  }
}
