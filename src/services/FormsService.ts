import { api } from '@/api';
import { IForm } from '@/models/form/IForm';

export const createForm = async (form: IForm) => {
  const { data } = await api.post('/form', form);
  return data;
};

export const getFormInterestsById = async (userId: string): Promise<{ interests: string[] }> => {
  const { data } = await api.get('/form/id/interests', { params: { userId } });
  return data;
};
