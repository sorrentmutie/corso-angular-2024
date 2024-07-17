import { Injectable } from "@angular/core";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DiscountService {
  count = 0;
  calculateDiscount(id:number): number {
    if(id === 0) return 0;
    if(this.count === 0){
      switch(id % 2) {
        case 0:
          return 0.1;
        case 1:
          return 0.2;
        default:
          return 0;
      }  
    }
    else {
      return 0;
    }
    this.count++;
  }
}
