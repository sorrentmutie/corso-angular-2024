import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-page',
  template: `

  <button style="margin-top:10px" class="btn btn-success" (click)="addProduct()"> Aggiungi un prodotto </button>

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
  `,
  styles: ``
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = [];
 
  constructor(private productsService: ProductsService) {
   }

   addProduct()
   {
    const product : Product = {date: new Date(), description: "Prodotto random", id: 10, 
      imageUrl: "https://via.placeholder.com/250/FF00FF", isAvailable: true, name: "Prodotto 7", price: 200};
      
    this.productsService.addProductToCatalog(product);
   }
   
  ngOnInit(): void {
    console.log('ProductsPageComponent ngOnInit');
    this.products = this.productsService.getCatalog();
  }

  removeProduct(product: Product): void {
    this.productsService.removeProduct(product);
  }
}
