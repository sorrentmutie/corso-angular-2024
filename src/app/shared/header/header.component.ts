import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';
import { Product } from '../../products/models/product';

@Component({
  selector: 'app-header',
  template: `
        <header>
      <div class="container">
        <div class="alert alert-primary" role="alert">
          Attenzione! Oggi ci sono {{numberOfProductsInSpecialOffer}}
          prodotti in offerta!
        </div>

        <div class="alert alert-success" role="alert">
          @if(bestProduct)
            {
              {{bestProduct.name}} {{bestProduct.price}}
            }
          
        </div>

      </div>
    </header>
  `,
  styles: ``
})

export class HeaderComponent implements OnDestroy {
  numberOfProductsInSpecialOffer = 0;
  bestProduct : Product | undefined = undefined;
  
  constructor(private productsService: ProductsService) { 
    this.numberOfProductsInSpecialOffer = productsService.getOfferProducts().length;
    this.bestProduct = productsService.getBestOfferProduct();
  }

  ngOnDestroy(): void {
  }
}
