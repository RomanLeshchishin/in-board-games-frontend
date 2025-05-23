import { api } from '@/api';
import { IFormModels } from '@/models/form/IForm';

export const createFormModels = async (formModels: IFormModels) => {
  const {} = await api.post('/form-models', formModels);
};
