import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomUserResponse, Result } from '../models/random-user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  private baseUrl = 'https://randomuser.me/api/';
  constructor(private httpClient: HttpClient) { }


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
