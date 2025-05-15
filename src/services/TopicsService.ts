import { api } from '@/api';
import { ITopic } from '@/models/ITopic';

export const getTopics = async (): Promise<ITopic[]> => {
  const { data } = await api.get('/topics');
  return data;
};
