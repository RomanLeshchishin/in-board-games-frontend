import { getAllGames } from '@/services/GamesService';
import { useAppQueryAuth } from '@/hooks/useAppQueryAuth';
import { QueryKey } from '@/const/queryKey';

export const useAllGames = () => {
  return useAppQueryAuth([QueryKey.GAMES], getAllGames);
};
