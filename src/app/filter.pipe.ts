import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(locked: any, query: string): any {
    if (!query) {
      return locked;
    }
    return locked.filter(item => item.title.toLowerCase().match(query.toLowerCase()))
  }
}
