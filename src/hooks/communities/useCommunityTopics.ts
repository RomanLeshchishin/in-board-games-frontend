import { useAppQuery } from '@/hooks/useAppQuery';
import { getCommunityTopics } from '@/services/CommunityTopicsService';
import { QueryKey } from '@/const/queryKey';

export const useCommunityTopics = (communityId: string) => {
  return useAppQuery([QueryKey.COMMUNITY_TOPICS, communityId], () => getCommunityTopics(communityId));
};
