import { IFormControlOptions } from '../form-control-options.interface';
import { IFormControl } from '../form-control.interface';

export class CheckBox implements IFormControl<IFormControlOptions, boolean> {
  readonly iconName: string = 'done';
  readonly type: string = 'CheckBox';
  readonly title: string = 'Check Box';

  constructor(public options?: IFormControlOptions, public value?: boolean) {}
}
