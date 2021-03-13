import { Component, OnInit } from '@angular/core';

import { TAXES } from '../../../../mock-data/taxes';

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
})
export class TaxesComponent implements OnInit {
  records = TAXES;

  constructor() {}

  ngOnInit(): void {}
}
