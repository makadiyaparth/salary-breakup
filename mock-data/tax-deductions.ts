import { RecordType } from '../src/app/enums/record-type.enum';
import { Record } from '../src/app/interfaces/record';

export const TAX_DEDUCTIONS: Record[] = [
  {
    id: 1,
    label: 'Standard Deduction',
    amount: 50000,
    multiplier: 1,
    type: RecordType.TAX_DEDUCTION,
  },
];
