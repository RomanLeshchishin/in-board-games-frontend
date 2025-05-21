import { useAppQuery } from '@/hooks/useAppQuery';
import { getInterests } from '@/services/InterestsService';
import { QueryKey } from '@/const/queryKey';

export const useInterests = () => {
  return useAppQuery([QueryKey.INTERESTS], getInterests);
};
