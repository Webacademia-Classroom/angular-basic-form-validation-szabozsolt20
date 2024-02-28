import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../model/customer';

@Pipe({
  name: 'ip',
  standalone: true
})
export class IpPipe implements PipeTransform {

  transform(value: Customer[], txt: string): Customer[] {
    if (!value || !txt) {
      return value;
    }

    txt = txt.toLowerCase();

    return value.filter( el => el.ip_address.includes(txt));
  }

}
