import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
