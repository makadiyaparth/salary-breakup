import { Component, OnInit } from '@angular/core';

import { TAX_EXEMPTIONS } from '../../../../mock-data/tax-exemptions';

@Component({
  selector: 'app-tax-exemptions',
  templateUrl: './tax-exemptions.component.html',
})
export class TaxExemptionsComponent implements OnInit {
  records = TAX_EXEMPTIONS;

  constructor() {}

  ngOnInit(): void {}
}
