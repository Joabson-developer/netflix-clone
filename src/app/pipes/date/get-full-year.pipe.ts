import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFullYear',
})
export class GetFullYearPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): number {
    return new Date(value).getFullYear();
  }
}
