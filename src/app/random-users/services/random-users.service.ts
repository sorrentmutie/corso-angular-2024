import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RandomUserResponse, Result } from '../models/random-user';
import { map, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  private baseUrl = 'https://randomuser.me/api/';

  private  httpClient = inject(HttpClient);
  private random$ = this.httpClient.get<RandomUserResponse>(this.baseUrl)
                        .pipe(
                          map(response => response.results)
                        );
  random = toSignal(this.random$, {initialValue: [] as Result[]});

  
  getRandomUser(): Observable<RandomUserResponse>{
    return this.httpClient
       .get<RandomUserResponse>(this.baseUrl);
  }

  getRandomUsers(quantity: number): Observable<RandomUserResponse>{
    return this.httpClient
       .get<RandomUserResponse>(`${this.baseUrl}?results=${quantity}`);
  }

  getRandomUserData(): Observable<Result> {
    return this.httpClient
       .get<RandomUserResponse>(this.baseUrl)
       .pipe(
         map(response => response.results[0])
       );
  }

  getRandomUsersData(quantity: number): Observable<Result[]> {
    return this.httpClient
       .get<RandomUserResponse>(`${this.baseUrl}?results=${quantity}`)
       .pipe(
         map(response => response.results)
       );
  }

  getRandomUsersDataBySex(quantity: number, gender: string): Observable<Result[]> {
    return this.httpClient
       .get<RandomUserResponse>(`${this.baseUrl}?results=${quantity}&gender=${gender}`)
       .pipe(
         map(response => response.results)
       );
  }

}
