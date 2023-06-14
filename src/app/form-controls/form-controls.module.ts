import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from './text-box/text-box.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ColumnsComponent } from './columns/columns.component';
import { CheckBoxComponent } from './check-box/check-box.component';



@NgModule({
  declarations: [
    TextBoxComponent,
    DropdownComponent,
    ColumnsComponent,
    CheckBoxComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    TextBoxComponent,
    DropdownComponent,
    CheckBoxComponent
  ],
})
export class FormControlsModule { }
