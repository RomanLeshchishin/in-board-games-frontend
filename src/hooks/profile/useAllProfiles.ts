import { useAppQuery } from '@/hooks/useAppQuery';
import { getAllProfiles } from '@/services/ProfileService';

export const useAllProfiles = () => {
  return useAppQuery(['profileCards'], getAllProfiles);
};
