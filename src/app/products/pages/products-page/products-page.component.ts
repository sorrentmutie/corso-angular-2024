import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { DiscountService } from '../../services/discount.service';

@Component({
  selector: 'app-products-page',
  template: `

    @if(products.length > 0) {
      <article>
        Numero totale di prodotti: {{products.length}}
      </article>
      <app-products-list (deleteProduct)="removeProduct($event)" [products]="products"></app-products-list>
    }
    @else {
      <article>
        Nessun prodotto presente
      </article>
    }
    <br/>
    <h3>Prodotti in offerta</h3>
    <app-products-list 
      (deleteProduct)="removeOfferProduct($event)"
      [products]="offerProducts">
    </app-products-list>


  `,
  styles: ``
})
export class ProductsPageComponent {
  products: Product[] = [];
  offerProducts: Product[] = [];

  constructor(private discountService: DiscountService) {
    this.loadProducts();
    this.loadOfferProducts();
  }

  removeProduct(product: Product): void {
    this.products.splice(this.products.indexOf(product), 1);
  }

  removeOfferProduct(product: Product): void {
    this.offerProducts.splice(this.offerProducts.indexOf(product), 1);
  }


  loadOfferProducts() {
    

    this.offerProducts.push(
      { id: 4, name: 'Prodotto 4',  
        price:  400 * (1 - this.discountService.calculateDiscount(4)), isAvailable: true,
        description: "Descrizione prodotto 4",
        imageUrl: "https://via.placeholder.com/250/FFFF00",
        date: new Date()
      },
      { id: 5, name: 'Prodotto 5', price: 500 * (1 - this.discountService.calculateDiscount(4)), isAvailable: true,
        description: "Descrizione prodotto 5",
        imageUrl: "https://via.placeholder.com/250/00FFFF",
        date: new Date()
      }

    );
  }

  loadProducts(): void {
     this.products.push(
      { id: 1, name: 'PRODOTTO 1', 
        price: 100, isAvailable: true,
        description: "Descrizione prodotto 1",
        imageUrl: "https://via.placeholder.com/250/0000FF",
        date: new Date()
       },
      { id: 2, name: 'Prodotto 2', 
        price: 200, isAvailable: false,
        description: "Descrizione prodotto 2",
        imageUrl: "https://via.placeholder.com/250/FF0000",
        date: new Date()
       },
      { id: 3, name: 'Prodotto 3', 
        price: 300, isAvailable: true,
        description: "Descrizione prodotto 3",
        imageUrl: "https://via.placeholder.com/250/00FF00",
        date: new Date()
       },
    );
  }

}
