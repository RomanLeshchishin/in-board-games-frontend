import { getTopics } from '@/services/TopicsService';
import { useAppQueryAuth } from '@/hooks/useAppQueryAuth';

export const useTopics = () => {
  return useAppQueryAuth(['topics'], getTopics);
};
