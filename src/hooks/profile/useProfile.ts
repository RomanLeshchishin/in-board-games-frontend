import { useAppQuery } from '@/hooks/useAppQuery';
import { getProfileByUserId } from '@/services/ProfileService';

export const useProfile = (userId: string) => {
  return useAppQuery(['profile', userId], () => getProfileByUserId(userId));
};
