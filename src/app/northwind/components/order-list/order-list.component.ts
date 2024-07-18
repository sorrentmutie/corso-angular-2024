import { Component, Input } from '@angular/core';
import { Northwind, UltimoOrdine } from '../../models/northwind';

@Component({
  selector: 'app-order-list',
  template: `

          

          <table class="table table-bordered table-striped table-hover" style="margin-top: 5px;">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Totale</th>
                <th scope="col">Corriere</th>
                <th scope="col">Data</th>
              </tr>
            </thead>
            <tbody>
              @for(order of orders; track order)
              {
                <tr>
                  <th scope="row">{{order.id}}</th>
                  <td>{{order.totale | currency: "EUR"}}</td>
                  <td>{{order.corriere}}</td>
                  <td>{{order.data | date:"dd/MM/yyyy"}}</td>
                </tr>
              }
            </tbody>
          </table>

  `,
  styles: ``
})


export class OrderListComponent {
  @Input() orders: UltimoOrdine[] | undefined = undefined; 

}
