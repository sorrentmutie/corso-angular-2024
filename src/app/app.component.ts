import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-menu/>
    <app-loader/>
    <app-notification/>
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
   
  }

  somma(a:number, b:number) {
     return a + b;
  }

}
