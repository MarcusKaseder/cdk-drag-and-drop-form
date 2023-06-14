import { Component, Input } from "@angular/core";
import { IFormControl } from "./form-control.interface";

@Component({
  template: ''
})
export abstract class FormControlComponentBase<TControl = IFormControl>
{
  @Input() control: TControl | undefined;
}
