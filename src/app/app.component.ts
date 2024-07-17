import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-menu/>
    
    <main class="container">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'mia applicazione';
  
  constructor() {
     console.log('AppComponent constructor');
  }

  somma(a:number, b:number) {
     return a + b;
  }

}
