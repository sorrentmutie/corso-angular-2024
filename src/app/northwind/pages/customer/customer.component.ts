import { Component, OnInit } from '@angular/core';
import { NorthwindCustomerService } from '../../services/northwind-customer.service';
import { Observable } from 'rxjs';
import { Northwind } from '../../models/northwind';

@Component({
  selector: 'app-customer',
  template: `

    @if(customer$ | async; as customer)
    {

      <div class="card">
        
        <div class="card-body">

        

        
          <div class="{{customer.dataUltimoOrdine | ultimoOrdine}}" role="alert">
              {{customer.dataUltimoOrdine | date:"dd/MM/yyyy"}}
          </div>

          <h5 class="card-title">{{customer.nome}}</h5>
          <p class="card-text">{{customer.indirizzoCompleto}}</p>
          <span class="badge text-bg-primary">Ordini: {{customer.numeroTotaleOrdini}}</span>
          <span class="badge text-bg-secondary" style="margin-left: 5px;">Totale: {{customer.sommaTotaleOrdini | currency:"EUR"}}</span>
          <app-order-list [orders]="customer.ordini"/>
        </div>
      </div>

    }

  `,
  styles: ``
})



export class CustomerComponent implements OnInit {
  customer$ : Observable<Northwind> | undefined = undefined;
  
  constructor(private service : NorthwindCustomerService) {}
  
  ngOnInit(): void {
    this.customer$ = this.service.getCustomerData("alfki");
  }

    
}
