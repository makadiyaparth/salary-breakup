import { RecordType } from '../src/app/enums/record-type.enum';
import { Record } from '../src/app/interfaces/record';

export const TAXES: Record[] = [
  {
    id: 1,
    label: 'Professional Tax',
    amount: 200,
    multiplier: 9,
    type: RecordType.TAXES,
  },
  {
    id: 2,
    label: 'Professional Tax (Feb)',
    amount: 300,
    multiplier: 1,
    type: RecordType.TAXES,
  },
];
