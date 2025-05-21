import { useAppQuery } from '@/hooks/useAppQuery';
import { getProfileByUserId } from '@/services/ProfileService';
import { QueryKey } from '@/const/queryKey';

export const useProfile = (userId: string) => {
  return useAppQuery([QueryKey.PROFILE, userId], () => getProfileByUserId(userId));
};
