import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Person, ReqResCreatedUser, ReqResCreateUser, ReqresResponse } from '../models/reqres';
import { map, Observable, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ReqresService{

  //public peopleSignal: Signal<Person[] | undefined> = signal(undefined);
  private url = "https://reqres.in/api/users?page=2";
  private urlCreate = "https://reqres.in/api/users";
  

  
  private  httpClient = inject(HttpClient);
  private users$ = this.httpClient.get<ReqresResponse>(this.url)
      .pipe(map(r => r.data));
  users = toSignal(this.users$, {initialValue: [] as Person[]});

  getData() : Observable<ReqresResponse>
  {
    return this.httpClient.get<ReqresResponse>(this.url);
  }

  getPeople() : Observable<Person[] | undefined>
  {
    return this.httpClient.get<ReqresResponse>(this.url)
          .pipe(map(r => r.data));
  }

  createUser(newUser: ReqResCreateUser): Observable<ReqResCreatedUser>
  {
    return this.httpClient.post<ReqResCreatedUser>(this.urlCreate, newUser);
  }

}
