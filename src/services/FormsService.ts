import { api } from '@/api';

export const getFormInterestsById = async (userId: string): Promise<{ interests: string[] }> => {
  const { data } = await api.get('/form/id/interests', { params: { userId } });
  return data;
};
