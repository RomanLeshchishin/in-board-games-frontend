import { IFilterForm } from '@/models/IFilter';
import { IGender } from '@/models/IForm';

export const filterGender: IFilterForm[] = [
  { value: '', label: 'Все' },
  { value: IGender.MALE, label: 'Мужской' },
  { value: IGender.FEMALE, label: 'Женский' },
];

export const filterAge: IFilterForm[] = [
  { value: '18–21', label: '18–21' },
  { value: '22–25', label: '22–25' },
  { value: '26–30', label: '26–30' },
  { value: '31–35', label: '31–35' },
  { value: '36–40', label: '36–40' },
  { value: '41–45', label: '41–45' },
  { value: '46–50', label: '46–50' },
  { value: '51–60', label: '51–60' },
  { value: '60-150', label: '60+' },
];
