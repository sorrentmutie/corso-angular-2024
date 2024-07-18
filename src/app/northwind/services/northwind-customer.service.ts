import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Northwind } from '../models/northwind';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class NorthwindCustomerService {
  url = "https://localhost:7024/customers/";
  
  constructor(private httpClient: HttpClient) { }

  getCustomerData(customerName : string) : Observable<Northwind>
  {
    return this.httpClient.get<Northwind>(this.url + customerName);
  }

}
