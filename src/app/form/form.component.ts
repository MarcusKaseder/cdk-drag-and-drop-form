import { Component, OnInit } from '@angular/core';
import { Columns } from '../form-controls/columns/columns.class';
import { Dropdown } from '../form-controls/dropdown/dropdown.class';
import { TextBox } from '../form-controls/text-box/text-box.class';
import { IForm } from '../models/form.interface';
import { FormService } from '../services/form.service';
import { OptionsGeneratorService } from '../services/options-generator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {


  constructor(public formService: FormService, public optionsGenerator: OptionsGeneratorService) {
  }

  ngOnInit(): void {}
}
