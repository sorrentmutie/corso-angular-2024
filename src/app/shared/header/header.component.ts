import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';

@Component({
  selector: 'app-header',
  template: `
        <header>
      <div class="container">
        <div class="alert alert-primary" role="alert">
          Attenzione! Oggi ci sono {{numberOfProductsInSpecialOffer}}
          prodotti in offerta!
        </div>
        <span class="badge text-bg-secondary">{{counter}}</span>
        <button (click)="addProductToCatalog()" class="btn btn-info">Aggiungi Prodotto a catalogo</button>
        <app-prova [mycounter]="counter"/> 
      </div>
    </header>
  `,
  styles: ``
})
export class HeaderComponent implements OnInit {
  numberOfProductsInSpecialOffer = 0;
  counter = 0;
  constructor(private productsService: ProductsService) { 
    console.log('HeaderComponent constructor');
    this.numberOfProductsInSpecialOffer = productsService.getOfferProducts().length;
  }
  ngOnInit(): void {
    // setInterval(() => {
    //    this.counter++;
   //  }, 1000);
  }
  addProductToCatalog(): void {
    this.productsService.addProductToCatalog({
      id: 6, name: 'Prodotto 6', price: 600, isAvailable: true,
      description: "Descrizione prodotto 6",
      imageUrl: "https://via.placeholder.com/250/FF00FF",
      date: new Date()
    });
  }
}
