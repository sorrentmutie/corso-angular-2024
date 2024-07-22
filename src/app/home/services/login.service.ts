import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private url = "https://reqres.in/api/login/";
  private token = "";

  constructor(private httpClient: HttpClient) { }


  login(loginData: LoginRequest) : Observable<LoginResponse>
  {
    return this.httpClient.post<LoginResponse>(this.url, loginData);
  }

  setToken(token: string)
  {
    this.token = token;
  }

  getToken(): string
  {
    return this.token;
  }

}
