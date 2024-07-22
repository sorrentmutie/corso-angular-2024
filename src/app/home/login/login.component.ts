import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
   <app-header></app-header>
   <input #myInput type="text" (keyup)="onKeyUp(myInput.value)">
  `,
  styles: ``
})
export class LoginComponent {
   onKeyUp(message: string) {
     console.log(message);
   }
}
