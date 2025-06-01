import { api } from '@/api';
import { ITopic } from '@/models/ITopic';

export const getAllTopics = async (): Promise<ITopic[]> => {
  const { data } = await api.get('/topics');
  return data;
};
