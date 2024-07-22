import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { LoginRequest, LoginResponse, User } from '../models/login';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private url = "https://reqres.in/api/login/";
  private token = "";
  public userSignal: WritableSignal<User | undefined>
    = signal(undefined);

  constructor(private httpClient: HttpClient) { }


  logout(){
    this.token = "";
    this.userSignal.set(undefined);
  }

  login(loginData: LoginRequest) : Observable<LoginResponse>
  {
    return this.httpClient.post<LoginResponse>(this.url, loginData)
      .pipe( 
        tap(x => {
          this.userSignal.set(
            
            { id: 1, email: "mario.rossi@gmail.com", 
              roles: ["user", "admin"],
              first_name: "Mario", last_name: "Rossi", avatar: "https://via.placeholder.com/250/FFFF00" });
        })
      );
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
