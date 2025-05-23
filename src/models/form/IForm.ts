export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum HowOften {
  TWICE_A_WEEK = 'TWICE_A_WEEK',
  WEEKLY = 'WEEKLY',
  TWICE_A_MONTH = 'TWICE_A_MONTH',
  MONTHLY = 'MONTHLY',
}

export enum WhatDays {
  WORKING = 'WORKING',
  WEEKENDS = 'WEEKENDS',
  WORKING_WEEKENDS = 'WORKING_WEEKENDS',
}

export interface IForm {
  profileId: string;
  birthday: Date;
  gender: Gender;
  whatDays: WhatDays;
  howOften: HowOften;
  favoriteTime: string[];
  patronymic?: string;
  phoneNumber?: string;
  address?: {};
  institute?: string;
  course?: number;
  direction?: string;
  profession?: string;
}

export interface IFormModels {
  interestIds?: string[];
  topicIds?: string[];
  gameIds?: string[];
}
