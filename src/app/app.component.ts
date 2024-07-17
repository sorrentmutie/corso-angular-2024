import { Component } from '@angular/core';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  template: `

    <app-menu/>

    <app-header></app-header>

    <main class="container">
     <app-products-page/>
    </main>
    <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'mia applicazione';
  
  constructor() {
     
  }

  somma(a:number, b:number) {
     return a + b;
  }

}
