import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(value: Product): string {
    return value.id + ' ' + value.name + ' - ' + value.price + ' €'    ;
  }

}
