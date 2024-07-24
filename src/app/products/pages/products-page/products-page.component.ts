import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-page',
  template: `


  <button style="margin-top:10px" class="btn btn-success" (click)="addProduct()"> Aggiungi un prodotto </button>
    <section *ngIf="products$ | async as products">
      <article>
        Numero totale di prodotti: {{products.length}}
      </article>
      <app-products-list (deleteProduct)="removeProduct($event)" 
           [products]="products"></app-products-list>
    </section>
  `,
  styles: ``
})
export class ProductsPageComponent implements OnInit {
  products$: Observable<Product[]> | undefined = undefined

  constructor(private productsService: ProductsService) {
   }

   addProduct()
   {
    const product : Product = {date: new Date(), description: "Prodotto random", id: 10, 
      imageUrl: "https://via.placeholder.com/250/FF00FF", isAvailable: true, name: "Prodotto 7", price: 200};
      
    this.productsService.addProductToCatalog(product);
   }
   
  ngOnInit(): void {
    this.products$ =  this.productsService.getCatalogAsync();

    // const z = this.productsService.getCatalogAsync().subscribe(ps => {});

  }

  removeProduct(product: Product): void {
    this.productsService.removeProduct(product);
  }
}
