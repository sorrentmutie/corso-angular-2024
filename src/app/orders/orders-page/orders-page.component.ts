import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-page',
  template: `
    <p>
      orders-page works!
    </p>
    <button class="btn btn-success" (click)="navigate()">Naviga verso prodotti</button>
  `,
  styles: ``
})
export class OrdersPageComponent {
      
    constructor(private router: Router) { }

    navigate(): void {
        console.log('Naviga verso prodotti');
        this.router.navigate(['/products']);
    }

}
