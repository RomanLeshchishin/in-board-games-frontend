import { getGames } from '@/services/GamesService';
import { useAppQueryAuth } from '@/hooks/useAppQueryAuth';
import { QueryKey } from '@/const/queryKey';

export const useGames = () => {
  return useAppQueryAuth([QueryKey.GAMES], getGames);
};
