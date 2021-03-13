import { Component, OnInit } from '@angular/core';

import { TAX_DEDUCTIONS } from '../../../../mock-data/tax-deductions';

@Component({
  selector: 'app-tax-deductions',
  templateUrl: './tax-deductions.component.html',
})
export class TaxDeductionsComponent implements OnInit {
  records = TAX_DEDUCTIONS;

  constructor() {}

  ngOnInit(): void {}
}
