import { IFormControlOptions } from '../form-control-options.interface';
import { IFormControl } from '../form-control.interface';

export class TextBox implements IFormControl<IFormControlOptions, string> {
  readonly iconName: string = 'text_fields';
  readonly type: string = 'TextBox';
  readonly title: string = 'Textbox';

  constructor(public options?: IFormControlOptions, public value?: string) {}
}
