import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person, ReqResCreatedUser, ReqResCreateUser, ReqresResponse } from '../models/reqres';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqresService{

  private url = "https://reqres.in/api/users?page=2&delay=9";
  private urlCreate = "https://reqres.in/api/users";

  constructor(private httpClient: HttpClient) { }

  getData() : Observable<ReqresResponse>
  {
    return this.httpClient.get<ReqresResponse>(this.url);
  }

  getPeople() : Observable<Person[]>
  {
    return this.httpClient.get<ReqresResponse>(this.url)
              .pipe(map(r => r.data));
  }

  createUser(newUser: ReqResCreateUser): Observable<ReqResCreatedUser>
  {
    return this.httpClient.post<ReqResCreatedUser>(this.urlCreate, newUser);
  }

}
