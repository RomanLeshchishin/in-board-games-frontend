export enum FormModelType {
  'AGE' = 'AGE',
  'GENDER' = 'GENDER',
  INTEREST = 'INTEREST',
  TOPIC = 'TOPIC',
  GAME = 'GAME',
  COMMUNITY = 'COMMUNITY',
}

export interface IFilterFormServer {
  modelId: string;
  modelType: FormModelType;
}

export interface IFilterForm {
  value: string;
  label: string;
}
