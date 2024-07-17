import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-page',
  template: `

    @if(products.length > 0) {
      <article>
        Numero totale di prodotti: {{products.length}}
      </article>
      <app-products-list (deleteProduct)="removeProduct($event)" 
           [products]="products"></app-products-list>
    }
    @else {
      <article>
        Nessun prodotto presente
      </article>
    }
    <br/>

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
export class ProductsPageComponent implements OnInit {
  products: Product[] = [];
  offerProducts: Product[] = [];

  constructor(private productsService: ProductsService) {
    console.log('ProductsPageComponent constructor');

   

  }
  ngOnInit(): void {
    console.log('ProductsPageComponent ngOnInit');
    this.products = this.productsService.getCatalog();
    this.offerProducts = this.productsService.getOfferProducts();
  }

  removeProduct(product: Product): void {
    this.products.splice(this.products.indexOf(product), 1);
  }

  removeOfferProduct(product: Product): void {
    this.offerProducts.splice(this.offerProducts.indexOf(product), 1);
  }
}
