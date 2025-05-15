import { ITopic } from '@/models/ITopic';

export interface IGame {
  id: string;
  topicId: string;
  title: string;
  description: string;
  numberParticipants: number;
  age: number;
  topic: Pick<ITopic, 'title'>;
}
