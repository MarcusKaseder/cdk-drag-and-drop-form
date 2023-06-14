import { Component, OnInit } from '@angular/core';
import { FormControlComponentBase } from '../control-component-base.class';
import { CheckBox } from './check-box.class';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent extends FormControlComponentBase<CheckBox> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
