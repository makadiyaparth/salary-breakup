import { Component, Input } from '@angular/core';

import { Record } from '../../../interfaces/record';

@Component({
  selector: 'app-display-record',
  templateUrl: './display-record.component.html',
})
export class DisplayRecordComponent {
  @Input() record: Record;
}
