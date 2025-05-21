import { api } from '@/api';

export const getCommunityTopics = async (communityId: string): Promise<{ topics: string[] }> => {
  const { data } = await api.get(`/community-topics/id/${communityId}`);
  return data;
};
