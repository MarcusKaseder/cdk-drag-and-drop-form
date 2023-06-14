import { Pipe, PipeTransform } from '@angular/core';
import { Columns } from './form-controls/columns/columns.class';

@Pipe({
  name: 'cast',
  pure: true
})
export class CastPipe implements PipeTransform {
  transform(value: any, args?: any): Columns {
    return value;
  }
}
