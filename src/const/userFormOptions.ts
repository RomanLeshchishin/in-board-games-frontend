import { Gender, HowOften, WhatDays } from '@/models/form/IForm';

export const genderOptions = [
  { value: '', label: 'Все' },
  { value: Gender.MALE, label: 'Мужской' },
  { value: Gender.FEMALE, label: 'Женский' },
];

export const daysOptions = [
  { value: WhatDays.WORKING, label: 'Рабочие' },
  { value: WhatDays.WORKING_WEEKENDS, label: 'Рабочие и выходные' },
  { value: WhatDays.WEEKENDS, label: 'Выходные' },
];

export const frequencyOptions = [
  { value: HowOften.TWICE_A_WEEK, label: 'Два раза в неделю' },
  { value: HowOften.WEEKLY, label: 'Раз в неделю' },
  { value: HowOften.TWICE_A_MONTH, label: 'Два раза в месяц' },
  { value: HowOften.MONTHLY, label: 'Раз в месяц' },
];
