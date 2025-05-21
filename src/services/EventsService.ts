import { api } from '@/api';
import { IEvent } from '@/models/IEvent';

export const getEvents = async (): Promise<IEvent[]> => {
  const { data } = await api.get('/events');
  return data;
};
