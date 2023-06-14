import { Component, OnInit } from '@angular/core';
import { FormControlComponentBase } from '../control-component-base.class';
import { Dropdown } from './dropdown.class';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends FormControlComponentBase<Dropdown> implements OnInit {

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
