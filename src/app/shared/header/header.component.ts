import { Component, OnDestroy, OnInit, signal,  } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';
import { Product } from '../../products/models/product';
import { LoginService } from '../../home/services/login.service';
import { ReqresService } from '../../reqres/services/reqres.service';
import { Person } from '../../models/person';
import { toSignal } from '@angular/core/rxjs-interop';
import { RandomUsersService } from '../../random-users/services/random-users.service';

@Component({
  selector: 'app-header',
  template: `
    <header class="item2 container">

    @if(loginService.userSignal()){
        <div class="alert alert-primary" role="alert">
          Attenzione! Oggi ci sono {{productsService.specialOfferSignal()}}
          prodotti in offerta!
        </div>

        <div class="alert alert-primary" role="alert">
          Ci sono {{reqresService.users().length}} persone
        </div>

        <div class="alert alert-primary" role="alert">
          Persona: {{(reandomService.random())[0].name.first}}
                   {{(reandomService.random())[0].name.last}}
        </div>
      }
      @else 
      {
        <div class="alert alert-primary" role="alert">
            Iscriviti per accedere al negozio
        </div>
      }
    </header>
  `,
  styles: ``
})

export class HeaderComponent implements OnDestroy {
  bestProduct : Product | undefined = undefined;

  constructor(public productsService: ProductsService, public loginService: LoginService, 
          public reqresService: ReqresService, public reandomService: RandomUsersService) {     
    this.bestProduct = productsService.getBestOfferProduct();
  }

  ngOnDestroy(): void {
  }
}
