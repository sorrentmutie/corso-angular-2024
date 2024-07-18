import { Component, OnInit } from '@angular/core';
import { PhotoPlaceholderPhotoService } from '../../services/photo-placeholder-photo.service';
import { Observable } from 'rxjs';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-photos-page',
  template: `
      @if(photos$ | async; as photos)
      {
        @for(photo of photos; track photo)
          {
            <img src={{photo.url}}>
            <p>{{photo.title}}</p>
          }
          

      }    
  `,
  styles: ``
})



export class PhotosPageComponent implements OnInit {
  photos$ : Observable<Photo[]> | undefined = undefined;

  constructor(private service: PhotoPlaceholderPhotoService){}


  ngOnInit(): void {
    this.photos$ = this.service.getPhotos();
  }

  
}
