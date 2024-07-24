import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="mycontainer">
    <div class="item1">
      <app-menu/>
    </div>
    <app-header></app-header>
    <main class="item3 container" style="overflow-y: scroll">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  </div>
  <app-loader/>
  <app-notification/>
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
