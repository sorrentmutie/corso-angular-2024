import { Component, signal } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-footer',
  template: `
    <div class="container-fluid" >
      footer works! {{dataService.countSignal()}}
      <button (click)="changeCount()">Incrementa</button>
    </div>
  `,
  styles: `
    .container-fluid {
      background-color: black;
      color: white;
      padding: 10px;
    }
  `
})
export class FooterComponent {

    
    constructor(public dataService: DataService) {

    }
  
    changeCount() {
      this.dataService.setCount(this.dataService.countSignal() + 1);
    }

  }
