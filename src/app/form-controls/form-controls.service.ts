import { Injectable } from '@angular/core';
import { Dropdown } from './dropdown/dropdown.class';
import { IFormControl } from './form-control.interface';
import { TextBox } from './text-box/text-box.class';
import { CheckBox } from './check-box/check-box.class';
import { Columns } from './columns/columns.class';

@Injectable({ providedIn: 'root' })
export class FormControlsService {
  controlTypes: any = { TextBox, Dropdown, Columns, CheckBox };
  constructor() {
    this.setLanguage("de");
  }

  public createControl(type: string): IFormControl {
    return new this.controlTypes[type]();
  }

  public setLanguage(lang: string) {
  }
}
