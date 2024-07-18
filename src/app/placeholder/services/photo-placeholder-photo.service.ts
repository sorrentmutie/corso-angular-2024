import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoPlaceholderPhotoService {

  constructor(private httpClient: HttpClient) { }

  getPhotos(): Observable<Photo[]>
  {
    const url = "https://jsonplaceholder.typicode.com/photos";
    return this.httpClient.get<Photo[]>(url); 
  }
}
