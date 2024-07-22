import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-list',
  template: `
          <table class="table table-bordered table-striped table-hover">
          <thead>
            <tr>
                <th>Immagine</th>
                <th>Nome</th>
                <th>Descrizione</th>
                <th>Prezzo</th>
                <th>Disponibile</th>
                <th>Data</th>
                <th></th>
            </tr>
          </thead>
          <tbody>
          @for(product of products; track product) {
            <tr>
              <td>
                <img src="{{product.imageUrl}}" alt="{{product.name}}" width="150">
              </td>
              <td>{{product.name | uppercase}}</td>
              <td>{{ product | product}}</td>
              <td>{{product.price | currency: "EUR"}}</td>
              <td>
                @if(product.isAvailable) {
                  <span class="badge badge text-bg-secondary">Disponibile</span>
                }
                @else {
                  <span class="badge badge text-bg-secondary">Non disponibile</span>
                }
              </td>
              <td>{{product.date | date: "dd/MM/yyyy"   }}</td>
              <td>
                <button (click)="delete(product)" class="btn btn-danger">Cancella</button>
              </td>
            </tr>
          }
        </tbody>
    </table>
  `,
  styles: `
    img {
      display: block;
      margin: auto;
      border-radius: 50%;
    }`
})
export class ProductsListComponent implements OnChanges {
    @Input() products: Product[] = [];
    @Output() deleteProduct = new EventEmitter<Product>();

    constructor() {
    }
  ngOnChanges(changes: SimpleChanges): void {
  }

    delete(product: Product) {
        this.deleteProduct.emit(product);
       // this.products.splice(this.products.indexOf(product), 1);
    }
}
