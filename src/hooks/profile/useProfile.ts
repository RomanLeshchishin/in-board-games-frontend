import { useAppQuery } from '@/hooks/useAppQuery';
import { getProfileById } from '@/services/ProfileService';

export const useProfile = () => {
  return useAppQuery(['profile'], getProfileById);
};
