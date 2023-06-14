import { Component, OnInit } from '@angular/core';
import { FormControlComponentBase } from '../control-component-base.class';
import { TextBox } from './text-box.class';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent extends FormControlComponentBase<TextBox> implements OnInit {

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
