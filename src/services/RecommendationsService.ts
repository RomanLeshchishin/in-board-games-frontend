import { IRecommendationProfile } from '@/models/IProfile';
import { api } from '@/api';

export const getAllRecommendationProfiles = async (): Promise<IRecommendationProfile[]> => {
  const { data } = await api.get('/recommendations/profiles');
  return data;
};
