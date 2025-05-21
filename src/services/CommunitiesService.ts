import { api } from '@/api';
import { ICommunity } from '@/models/ICommunity';

export const getCommunities = async (): Promise<ICommunity[]> => {
  const { data } = await api.get('/communities');
  return data;
};
