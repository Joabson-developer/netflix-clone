import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength',
})
export class MaxLengthPipe implements PipeTransform {
  transform(text: string, length: number): string {
    if (!text.length || text.length <= length) {
      return text;
    }

    return text.substring(0, length) + '...';
  }
}
