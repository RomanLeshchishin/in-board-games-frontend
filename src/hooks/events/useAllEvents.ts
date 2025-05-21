import { useAppQuery } from '@/hooks/useAppQuery';
import { getEvents } from '@/services/EventsService';
import { QueryKey } from '@/const/queryKey';

export const useAllEvents = () => {
  return useAppQuery([QueryKey.EVENTS], getEvents);
};
