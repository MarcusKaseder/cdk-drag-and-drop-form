import { Injectable } from '@angular/core';
import { CheckBox } from '../form-controls/check-box/check-box.class';
import { TextBox } from '../form-controls/text-box/text-box.class';
import { IForm } from '../models/form.interface';
import { FormService } from './form.service';
import { Columns } from '../form-controls/columns/columns.class';

@Injectable({providedIn: 'root'})
export class OptionsGeneratorService {
  constructor(private formService: FormService) {
    this.formService.setForm(this.createDefaultOptions());
  }

  createDefaultOptions(): IForm
  {
    return {
      title: "Options",
      container: {
        controls: [
          new TextBox({ name: "name", title: "Name"}),
          new TextBox({name: "title", title: "Title"}),
          new Columns(),
          new CheckBox({name: "required", title: "Required"}, false),
          new CheckBox({name: "readonly", title: "Readonly"}, false),
          new CheckBox({name: "disabled", title: "Disabled"}, false)
        ]
      }
    }
  }
}
