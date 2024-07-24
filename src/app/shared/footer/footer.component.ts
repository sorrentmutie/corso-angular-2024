import { Component, signal } from '@angular/core';
import { DataService } from '../services/data.service';
import { ProductsService } from '../../products/services/products.service';


@Component({
  selector: 'app-footer',
  template: `
    <div class="item4" >
      footer works! {{dataService.countSignal()}}
      <button (click)="changeCount()">Incrementa</button>
    </div>
  `,
  styles: `
    
  `
})
export class FooterComponent {

    
    constructor(public dataService: DataService, public productService: ProductsService) {
      setInterval(() => {
        this.productService.addOfferProduct(
          { id: 4, name: 'Prodotto 4',  
          price:  400, isAvailable: true,
          description: "Descrizione prodotto 4",
          imageUrl: "https://via.placeholder.com/250/FFFF00",
          date: new Date()
        })
      }, 1000);
    }
  
    changeCount() {
      this.dataService.setCount(this.dataService.countSignal() + 1);
    }

  }
