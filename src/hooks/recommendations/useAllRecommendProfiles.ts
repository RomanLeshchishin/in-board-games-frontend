import { useAppQuery } from '@/hooks/useAppQuery';
import { QueryKey } from '@/const/queryKey';
import { getAllRecommendationProfiles } from '@/services/RecommendationsService';

export const useAllRecommendProfiles = () => {
  return useAppQuery([QueryKey.RECOMMEND_PROFILES], getAllRecommendationProfiles);
};
