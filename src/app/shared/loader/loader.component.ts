import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-loader',
  template: `
    @if(dataService.showLoaderSignal()){
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    }
  `,
  styles: ``
})
export class LoaderComponent {
     
    constructor(public dataService: DataService) { }
}
