import { Component, Input } from '@angular/core';
import { Person } from '../../models/reqres';

@Component({
  selector: 'app-reqres-card',
  template: `
  @if(user)
    {
      <div class="card" style="width: 18rem;">
        <img src="{{user.avatar}}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{user.first_name}} {{user.last_name}}</h5>
          <p class="card-text">{{user.email}}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    }
  `,
  styles: ``
})
export class ReqresCardComponent {
  @Input() user: Person | undefined = undefined;
}
