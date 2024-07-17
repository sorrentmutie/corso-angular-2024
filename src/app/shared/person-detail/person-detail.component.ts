import { Component } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-person-detail',
  template: `
   <h3>{{michele.printFullName()}}</h3>
  `,
  styles: `
  h3 {
    color: white;
  }
  `
})
export class PersonDetailComponent {
  michele: Person = {
    name: 'Michele',
    surname: 'Papetti',
    age: 40,
    printFullName: function() {
       return this.name + ' ' + this.surname;
     }
    }
}
