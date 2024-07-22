import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { MenuItem } from './menu-item';
import { LoginService } from '../../home/services/login.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  template: `
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{{dataService.countSignal()}}   Navbar {{loginService.getToken()}}</a>
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

      @if(loginService.userSignal()) {
        <img style="width: 50px" src="{{loginService.userSignal()?.avatar}}">
        <span style="color:white"> Benvenuto, {{loginService.userSignal()?.first_name}} </span>
        <button (click)="logout()" class="btn btn-secondary"> Logout </button>
      }
      @else 
      {
         <button (click)="login()" class="btn btn-secondary"> Login </button>
      }


    </div>
  </div>
</nav>
  `,
  styles: ``
})
export class MenuComponent implements OnInit  {

  menuItems: MenuItem[] = [];

  constructor(private menuService: MenuService, 
              public loginService: LoginService,
              public dataService: DataService,
              private router: Router) { 
    
  }
  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }

  login() {
    this.router.navigate(['/home']);
  }


}
