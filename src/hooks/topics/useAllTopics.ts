import { getAllTopics } from '@/services/TopicsService';
import { useAppQueryAuth } from '@/hooks/useAppQueryAuth';
import { QueryKey } from '@/const/queryKey';

export const useAllTopics = () => {
  return useAppQueryAuth([QueryKey.TOPICS], getAllTopics);
};
