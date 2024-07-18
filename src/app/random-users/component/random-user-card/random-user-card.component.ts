import { Component, Input } from '@angular/core';
import { Result } from '../../models/random-user';

@Component({
  selector: 'app-random-user-card',
  template: `
   @if(user){
    <div class="card">
      <img src="{{user.picture.large}}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{user.name.first}} {{user.name.last}}</h5>
        <p class="card-text">{{user.location | location}} </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
   </div>
   } 
  `,
  styles: `
    img { width: 200px; display: block; margin: 0 auto;border-radius: 50%; margin-top: 5px;}
  `
})
export class RandomUserCardComponent {
   @Input() user: Result | undefined = undefined; 
}
