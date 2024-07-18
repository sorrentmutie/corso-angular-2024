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
import { provideHttpClient } from '@angular/common/http';
import { RandomUserCardComponent } from './random-users/component/random-user-card/random-user-card.component';
import { LocationPipe } from './random-users/pipes/location.pipe';


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
    LocationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { 

  // provide httpclient module to the app


}


