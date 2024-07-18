import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../models/random-user';

@Pipe({
  name: 'location'
})
export class LocationPipe implements PipeTransform {

  transform(value: Location): string {

    if (value) {
      return `${value.street.number} ${value.street.name} ${value.city} ${value.state} ${value.country}`;
    } else {
      return '';
    }
  }

}
