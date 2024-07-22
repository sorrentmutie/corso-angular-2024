import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { MenuItem } from './menu-item';
import { LoginService } from '../../home/services/login.service';
@Component({
  selector: 'app-menu',
  template: `
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar {{loginService.getToken()}}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      @for(menuItem of menuItems; track menuItem) {
        <li class="nav-item">
          <a class="nav-link" routerLink="{{menuItem.link}}" >
            {{menuItem.label}}
          </a>
        </li>
      }
      </ul>
    </div>
  </div>
</nav>
  `,
  styles: ``
})
export class MenuComponent implements OnInit  {

  menuItems: MenuItem[] = [];

  constructor(private menuService: MenuService, public loginService: LoginService) { 
    console.log('MenuComponent constructor');
    
  }
  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
  }
}
