import { Component, OnInit } from '@angular/core';
import { RandomUsersService } from '../../services/random-users.service';
import { Observable } from 'rxjs';
import { Result } from '../../models/random-user';

@Component({
  selector: 'app-random-user-page',
  template: `

    @if( randomUsers$ | async; as users) {
      @for(user of users; track user){
        <app-random-user-card [user]="user"/>
      }
    }
  `,
  styles: ``
})
export class RandomUserPageComponent implements OnInit 
{
    randomUsers$ : Observable<Result[]> | undefined = undefined;
    constructor(private service: RandomUsersService) {}
  ngOnInit(): void {
      this.randomUsers$ =  this.service.getRandomUsersDataBySex(10, "female")
  }
}
