import { getAllInterests } from '@/services/InterestsService';
import { QueryKey } from '@/const/queryKey';
import { useAppQueryAuth } from '@/hooks/useAppQueryAuth';

export const useAllInterests = () => {
  return useAppQueryAuth([QueryKey.INTERESTS], getAllInterests);
};
