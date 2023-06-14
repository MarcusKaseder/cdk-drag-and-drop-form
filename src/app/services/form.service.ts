import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Columns } from '../form-controls/columns/columns.class';
import { Dropdown } from '../form-controls/dropdown/dropdown.class';
import { TextBox } from '../form-controls/text-box/text-box.class';
import { IForm } from '../models/form.interface';
import { DragDropService } from './drag-drop.service';

@Injectable({ providedIn: 'root' })
export class FormService {

  form$ = new BehaviorSubject<IForm>({ title: 'First Form', container: { controls: [new TextBox(), new Columns(), new Dropdown()] }});

  constructor(private dragDropService: DragDropService) {
    this.dragDropService.controlDropped.subscribe((control) =>
      this.onControlDropped()
    );
  }

  private onControlDropped() {
  }

  public setForm(form: IForm)
  {
    this.form$.next(form);
  }
}
