type Uuid = string;

type Action = {
  type: string;
  payload?: any;
};

interface IRecordFunctions<TRecordData, TRecordFunctions> {
  // We can return the data of a record
  toObject: () => TRecordData;
  // We can merge the record data with other record data
  with: (data: Partial<TRecordData>) => TRecordFunctions & TRecordData;
}
