import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';
import { TcmbService } from '../services/tcmb.service';

@Pipe({
  name: 'tcmbUsdTl',
})
export class TcmbUsdTlPipe implements PipeTransform {
  dollar: number = 0;

  constructor(private tcmb: TcmbService) {}

  transform(value: number): number {
    this.tcmb.getDollars().subscribe((response) => {
      this.dollar = response;
    });

    return Math.round(value * this.dollar);
  }
}
