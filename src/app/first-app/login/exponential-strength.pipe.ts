import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength',
  standalone: true,
})

export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: string, exponent=2 ): number {
    return Math.pow(+value, exponent);
  }
}