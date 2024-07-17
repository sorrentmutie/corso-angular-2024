import { Component } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';

@Component({
  selector: 'app-footer',
  template: `
    <div class="container-fluid" >
      footer works! {{productsService.getCatalog().length}}
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
  numberOfProducts = 0;
  constructor(public productsService: ProductsService) {
    console.log('FooterComponent constructor');
    //this.numberOfProducts = productsService.getCatalog().length; 
  }
}
