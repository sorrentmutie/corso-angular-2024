import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { OrdersPageComponent } from './orders/orders-page/orders-page.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './home/login/login.component';
import { ContactsPageComponent } from './contacts/contacts-page/contacts-page.component';
import { OffersPageComponent } from './offers/offers-page/offers-page.component';
import { RandomUserPageComponent } from './random-users/pages/random-user-page/random-user-page.component';
import { ReqresPageComponent } from './reqres/pages/reqres-page/reqres-page.component';
import { PhotosPageComponent } from './placeholder/pages/photos-page/photos-page.component';
import { CustomerComponent } from './northwind/pages/customer/customer.component';
import { HeroFormComponent } from './heroes/pages/hero-form/hero-form.component';
import { ReqResFormComponent } from './reqres/pages/req-res-form/req-res-form.component';
import { AuthGuardService } from './shared/guards/auth-guard';
import { AdminGuardService } from './shared/guards/admin-.guard';


const routes: Routes = [
  { path: 'products', component: ProductsPageComponent, canActivate: [AuthGuardService] },
  { path: 'orders', component: OrdersPageComponent, canActivate: [AuthGuardService] },
  { path: 'home', component: LoginComponent},
  { path: 'random', component: RandomUserPageComponent, canActivate: [AdminGuardService] },
  { path: 'contacts', component: ContactsPageComponent, canActivate: [AuthGuardService] },
  { path: 'reqres', component: ReqresPageComponent, canActivate: [AuthGuardService]},
  { path: 'reqres-form', component: ReqResFormComponent, canActivate: [AuthGuardService]},   
  { path: 'photos', component: PhotosPageComponent, canActivate: [AuthGuardService]},
  { path: 'hero-form', component: HeroFormComponent , canActivate: [AuthGuardService]},
  { path: 'offers', component: OffersPageComponent, canActivate: [AuthGuardService]},  
  { path: 'northwind', component: CustomerComponent, canActivate: [AuthGuardService]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
