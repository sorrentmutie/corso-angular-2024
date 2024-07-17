import { Component } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';
import { filter, map, of } from 'rxjs';

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

    const myObservable = of(1,2,3,4,5,6,7,8,9,10);

    const myObserver = {
     next: (x:number) => console.log('Observer got a next value: ' + x),
     error: (err:Error) => console.error('Observer got an error: ' + err.message),
     complete: () => console.log('Observer got a complete notification'),
    };


    myObservable.
    pipe(
      map(x => x * 3),
      filter(x => x % 2 === 0)
    ).
    subscribe(myObserver);

  }
}
