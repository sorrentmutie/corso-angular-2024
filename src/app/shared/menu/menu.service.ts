import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { console.log('sono nel costruttore'); }

  getMenuItems(): MenuItem[] {
    return [
      { label: 'Home', link: '/home' },
      { label: 'Products', link: '/products' },
      { label: 'Orders', link: '/orders' },
      { label: 'Offers', link: '/offers' },
      { label: 'Photos', link: '/photos'},
      { label: 'Random', link: '/random'},
      { label: 'ReqRes', link: '/reqres'},
      { label: 'Northwind', link: '/northwind'}
    ];
  }
}
