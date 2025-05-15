import { api } from '@/api';
import { IFilterFormServer } from '@/models/IFilter';

export const filterByMany = async (filters: IFilterFormServer[]) => {
  const { data } = await api.post('/filters/many', filters);
  return data;
};

export const filterByManyAuth = async (filters: IFilterFormServer[]) => {
  const { data } = await api.post('/filters/many-auth', filters);
  return data;
};
