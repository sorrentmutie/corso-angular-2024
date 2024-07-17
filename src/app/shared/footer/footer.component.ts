import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="container-fluid" >
      footer works!
    </div>
  `,
  styles: `
    .container-fluid {
      background-color: black;
      color: white;
      padding: 10px;
    }
  `
})
export class FooterComponent {

}
