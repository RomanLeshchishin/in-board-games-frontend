import { api } from '@/api';
import { IGame } from '@/models/IGame';

export const getAllGames = async (): Promise<IGame[]> => {
  const { data } = await api.get('/games');
  return data;
};
