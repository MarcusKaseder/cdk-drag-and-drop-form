import { IFormControl } from "../form-controls/form-control.interface";

export interface IDragItem extends IFormControl
{
  isClone?: boolean;
}
