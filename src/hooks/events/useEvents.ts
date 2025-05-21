import { useAppQuery } from '@/hooks/useAppQuery';
import { getEvents } from '@/services/EventsService';

export const useEvents = () => {
  return useAppQuery(['events'], getEvents);
};
