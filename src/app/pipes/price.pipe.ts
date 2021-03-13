import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    value = +value.toFixed(2);
    return `₹${value.toLocaleString('en-IN')}`;
  }
}
