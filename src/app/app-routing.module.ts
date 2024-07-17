import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { OrdersPageComponent } from './orders/orders-page/orders-page.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './home/login/login.component';
import { ContactsPageComponent } from './contacts/contacts-page/contacts-page.component';
import { OffersPageComponent } from './offers/offers-page/offers-page.component';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent },
  { path: 'orders', component: OrdersPageComponent },
  { path: 'home', component: LoginComponent},
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'offers', component: OffersPageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
