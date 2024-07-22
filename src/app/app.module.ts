import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDetailComponent } from './shared/person-detail/person-detail.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { ProductPipe } from './products/pipes/product.pipe';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { ProvaComponent } from './shared/prova/prova.component';
import { OrdersPageComponent } from './orders/orders-page/orders-page.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './home/login/login.component';
import { ContactsPageComponent } from './contacts/contacts-page/contacts-page.component';
import { OffersPageComponent } from './offers/offers-page/offers-page.component';
import { RandomUserPageComponent } from './random-users/pages/random-user-page/random-user-page.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { RandomUserCardComponent } from './random-users/component/random-user-card/random-user-card.component';
import { LocationPipe } from './random-users/pipes/location.pipe';
import { ReqresPageComponent } from './reqres/pages/reqres-page/reqres-page.component';
import { ReqresCardComponent } from './reqres/components/reqres-card/reqres-card.component';
import { PhotosPageComponent } from './placeholder/pages/photos-page/photos-page.component';
import { CustomerComponent } from './northwind/pages/customer/customer.component';
import { OrderListComponent } from './northwind/components/order-list/order-list.component';
import { UltimoOrdinePipe } from './northwind/pipes/ultimo-ordine.pipe';
import { HeroFormComponent } from './heroes/pages/hero-form/hero-form.component';
import { FormsModule } from '@angular/forms';
import { ReqResFormComponent } from './reqres/pages/req-res-form/req-res-form.component';
import { first } from 'rxjs';
import { firstInterceptor } from './shared/interceptors/first.interceptor';
import { secondInterceptor } from './shared/interceptors/second.interceptor';
import { LoaderComponent } from './shared/loader/loader.component';
import { NotificationComponent } from './shared/notifications/notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    ProductsPageComponent,
    ProductPipe,
    ProductsListComponent,
    ProvaComponent,
    OrdersPageComponent,
    NotFoundComponent,
    LoginComponent,
    ContactsPageComponent,
    OffersPageComponent,
    RandomUserPageComponent,
    RandomUserCardComponent,
    LocationPipe,
    ReqresPageComponent,
    ReqresCardComponent,
    PhotosPageComponent,
    CustomerComponent,
    OrderListComponent,
    UltimoOrdinePipe,
    HeroFormComponent,
    ReqResFormComponent,
    LoaderComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(withInterceptors(
    [firstInterceptor, secondInterceptor ]))],
  bootstrap: [AppComponent]
})
export class AppModule { 

  // provide httpclient module to the app


}


