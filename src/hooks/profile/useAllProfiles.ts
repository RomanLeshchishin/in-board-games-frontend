import { useAppQuery } from '@/hooks/useAppQuery';
import { getAllProfiles } from '@/services/ProfileService';
import { QueryKey } from '@/const/queryKey';

export const useAllProfiles = () => {
  return useAppQuery([QueryKey.PROFILE_CARDS], getAllProfiles);
};
