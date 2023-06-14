import { IFormControl } from '../form-control.interface';
import { IColumn } from './column.interface';

export class Columns implements IFormControl {
  readonly iconName: string = 'table_chart';
  readonly type: string = 'Columns';
  readonly title: string = 'Columns';

  columns: IColumn[] = [
    { container: { controls: [] } },
    { container: { controls: [] } },
  ];
}
