import { api } from '@/api';

export const getCommunities = async () => {
  const { data } = await api.get('/communities');
  return data;
};
