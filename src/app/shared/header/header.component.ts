import { Component, OnDestroy, OnInit, signal,  } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';
import { Product } from '../../products/models/product';
import { LoginService } from '../../home/services/login.service';
import { ReqresService } from '../../reqres/services/reqres.service';
import { Person } from '../../models/person';
import { toSignal } from '@angular/core/rxjs-interop';

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
          Ci sono {{reqresService.peopleSignal()?.length}} persone
        </div>

        <div class="alert alert-success" role="alert">
          @if(bestProduct)
            {
              {{bestProduct.name}} {{bestProduct.price}}
            }          
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
  public peopleSignal: any = signal(undefined);

  constructor(public productsService: ProductsService, public loginService: LoginService, public reqresService: ReqresService) {     
    this.bestProduct = productsService.getBestOfferProduct();
    this.peopleSignal = toSignal(this.reqresService.getPeople(), {initialValue: undefined});
    console.log('peopleSignal ' + this.peopleSignal());
  }

  ngOnDestroy(): void {
  }
}
