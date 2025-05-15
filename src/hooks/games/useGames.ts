import { getGames } from '@/services/GamesService';
import { useAppQueryAuth } from '@/hooks/useAppQueryAuth';

export const useGames = () => {
  return useAppQueryAuth(['games'], getGames);
};
