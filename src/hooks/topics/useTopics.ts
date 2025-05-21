import { getTopics } from '@/services/TopicsService';
import { useAppQueryAuth } from '@/hooks/useAppQueryAuth';
import { QueryKey } from '@/const/queryKey';

export const useTopics = () => {
  return useAppQueryAuth([QueryKey.TOPICS], getTopics);
};
