import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipse'
})

export class EllipesPipe implements PipeTransform {
  transform(value: any): any {
    if (!value) {
      return null;
    }
    return value.split('').splice(0, 2).join('') + '...' + value.split('').splice(-4, 4).join('');
  }
}
