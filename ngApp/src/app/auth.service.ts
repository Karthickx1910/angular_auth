import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {}

  registerUser(objUser) {
    return this.http.post<any>(this._registerUrl, objUser);
  }

  loginUser(objUser) {
    return this.http.post(this._loginUrl, objUser);
  }
}
