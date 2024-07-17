import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { OrdersPageComponent } from './orders/orders-page/orders-page.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent },
  { path: 'orders', component: OrdersPageComponent },
  { path: 'home', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
