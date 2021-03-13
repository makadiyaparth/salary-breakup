import { RecordType } from '../enums/record-type.enum';

export class Record {
  id: number;
  label: string;
  amount: number;
  multiplier: number;
  type: RecordType;
}
