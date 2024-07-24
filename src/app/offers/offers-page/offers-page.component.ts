import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';
import { Product } from '../../products/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-offers-page',
  template: `
    <section *ngIf="offerProducts$ | async as offerProducts">
       @if(offerProducts.length > 0) {
         <app-products-list [products]="offerProducts" (deleteProduct)="removeOfferProduct($event)"/>
       }
       @else {
        <article>
          Nessun prodotto in offerta
        </article>
      }
    </section>
  `,
  styles: ``
})

export class OffersPageComponent implements OnInit{
    offerProducts$ : Observable<Product[]> | undefined = undefined;  

    constructor (private productsService: ProductsService)    {}

    ngOnInit(): void {
    this.offerProducts$ = this.productsService.getOfferProductsAsync();
    }

    removeOfferProduct(product: Product): void {
      this.productsService.removeOfferProduct(product);
    }
}
