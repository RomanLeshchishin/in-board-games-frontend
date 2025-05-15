import { useAppQuery } from '@/hooks/useAppQuery';
import { getInterests } from '@/services/InterestsService';

export const useInterests = () => {
  return useAppQuery(['interests'], getInterests);
};
