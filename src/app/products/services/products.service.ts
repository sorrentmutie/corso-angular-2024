import { Injectable, signal, WritableSignal } from '@angular/core';
import { Product } from '../models/product';
import { DiscountService } from './discount.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public specialOfferSignal: WritableSignal<number> = signal(0);

  private products: Product[] = [];
  private offerProducts: Product[] = [];
  randomNumber = 0;

  constructor(private discountService: DiscountService) { 
    this.loadProducts();
    this.loadOfferProducts(); 
    this.specialOfferSignal.set(this.offerProducts.length);
    console.log('costruttore di product service');
    this.randomNumber = Math.random();
    console.log('randomNumber ' + this.randomNumber);
  }

  addProductToCatalog(product: Product): void {
    this.products.push(product);
  }

  getCatalog(): Product[] { 
    return this.products;
  }

  getCatalogAsync(): Observable<Product[]> {
    return of(this.products);
  }


  getOfferProducts(): Product[] {
    return this.offerProducts;
  }

  getOfferProductsAsync(): Observable<Product[]> {
    return of(this.offerProducts);
  }



  getBestOfferProduct(): Product | undefined{
    let minPrice = 1000000;
    let product : Product | undefined = undefined;
    for(let i = 0; i < this.offerProducts.length; i++)
    {
      if(this.offerProducts[i].price < minPrice)
      {
        minPrice = this.offerProducts[i].price;
        product = this.offerProducts[i];
      }
    }

    return product;
  }

  removeProduct(product : Product) : void
  {
    this.products.splice(this.products.indexOf(product), 1);
  }


  removeOfferProduct(product: Product) : void
  {
    this.offerProducts.splice(this.offerProducts.indexOf(product), 1);
    this.specialOfferSignal.set(this.offerProducts.length);
  }

  addOfferProduct(product: Product) : void
  {
    this.offerProducts.push(product);
    this.specialOfferSignal.set(this.offerProducts.length);
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
