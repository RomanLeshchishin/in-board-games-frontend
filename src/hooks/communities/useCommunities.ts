import { useAppQuery } from '@/hooks/useAppQuery';
import { getCommunities } from '@/services/CommunitiesService';

export const useCommunities = () => {
  return useAppQuery(['communities'], getCommunities);
};
