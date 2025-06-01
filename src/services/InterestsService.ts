import { api } from '@/api';
import { IInterest } from '@/models/IInterest';

export const getAllInterests = async (): Promise<IInterest[]> => {
  const { data } = await api.get('/interests');
  return data;
};
