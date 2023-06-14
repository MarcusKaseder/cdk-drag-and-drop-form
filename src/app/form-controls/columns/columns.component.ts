import { Component, OnInit } from '@angular/core';
import { FormControlComponentBase } from '../control-component-base.class';
import { Columns } from './columns.class';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss']
})
export class ColumnsComponent extends FormControlComponentBase<Columns> implements OnInit {

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
