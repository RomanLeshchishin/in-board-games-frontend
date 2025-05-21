import { useAppQuery } from '@/hooks/useAppQuery';
import { getCommunities } from '@/services/CommunitiesService';
import { QueryKey } from '@/const/queryKey';

export const useAllCommunities = () => {
  return useAppQuery([QueryKey.COMMUNITIES], getCommunities);
};
