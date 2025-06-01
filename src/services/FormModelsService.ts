import { api } from '@/api';
import { IFormModels } from '@/models/form/IForm';

export const createFormModels = async (formModels: IFormModels) => {
  const { data } = await api.post('/form-models', formModels);
  return data;
};
