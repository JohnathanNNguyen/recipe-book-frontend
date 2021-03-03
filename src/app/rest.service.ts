import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private readonly http: HttpClient) {}

  register(body): Promise<any> {
    return this.http.post(`${environment.apiUrl}/register`, body).toPromise();
  }

  // logIn(body: { email: string; password: string }): Promise<any> {
  //   return this.http.post(`${environment.apiUrl}/log-in`, body).toPromise();
  // }
  logIn(body): Promise<any> {
    return this.http.post(`${environment.apiUrl}/log-in`, body).toPromise();
  }
}
