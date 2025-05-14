import { useAppQuery } from '@/hooks/useAppQuery';
import { getFormInterestsById } from '@/services/FormsService';

export const useFormInterests = (userId: string) => {
  return useAppQuery(['formInterests', userId], () => getFormInterestsById(userId));
};
