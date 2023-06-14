import { Component, Input, OnInit } from '@angular/core';
import { Columns } from '../form-controls/columns/columns.class';

@Component({
  selector: 'app-form-columns',
  templateUrl: './form-columns.component.html',
  styleUrls: ['./form-columns.component.scss']
})
export class FormColumnsComponent implements OnInit {

  @Input() control?: Columns;

  constructor() { }

  ngOnInit(): void {
  }

}
