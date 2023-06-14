import { IFormControl } from "../form-control.interface";

export class Dropdown implements IFormControl
{
  readonly iconName: string = "format_list_bulleted";
  readonly type: string = "Dropdown";
  readonly title: string = "Dropdown";

}
