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

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    ProductsPageComponent,
    ProductPipe,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
