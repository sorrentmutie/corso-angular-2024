import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../../services/reqres.service';
import { Observable } from 'rxjs';
import { Person, ReqresResponse } from '../../models/reqres';

@Component({
  selector: 'app-reqres-page',
  template: `
  @if( reqres$ | async; as reqresUsers) {
    <div>
    @for(user of reqresUsers; track user)
        {
          <app-reqres-card [user]="user"></app-reqres-card>
        }
    </div>
    }
  `,
  styles: ``
})

export class ReqresPageComponent implements OnInit {
  reqres$ : Observable<Person[] | undefined> | undefined = undefined;

  constructor(private reqresService: ReqresService){ }
  
  ngOnInit(): void {
    this.reqres$ = this.reqresService.getPeople();
  }

    
}
