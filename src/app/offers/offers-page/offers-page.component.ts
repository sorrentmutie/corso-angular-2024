import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';
import { Product } from '../../products/models/product';

@Component({
  selector: 'app-offers-page',
  template: `
     @if(offerProducts.length > 0) {
      <h3>Prodotti in offerta</h3>
    <app-products-list 
      (deleteProduct)="removeOfferProduct($event)"
      [products]="offerProducts">
    </app-products-list>
    }
    @else {
      <article>
        Nessun prodotto in offerta
      </article>
    }
  `,
  styles: ``
})

export class OffersPageComponent implements OnInit{
  offerProducts : Product[] = [];
    
    constructor (private productsService: ProductsService)
    {}

  ngOnInit(): void {
    this.offerProducts = this.productsService.getOfferProducts();
  }

  removeOfferProduct(product: Product): void {
    this.offerProducts.splice(this.offerProducts.indexOf(product), 1);
  }
}
