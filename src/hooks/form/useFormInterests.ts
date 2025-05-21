import { useAppQuery } from '@/hooks/useAppQuery';
import { getFormInterestsById } from '@/services/FormsService';
import { QueryKey } from '@/const/queryKey';

export const useFormInterests = (userId: string) => {
  return useAppQuery([QueryKey.FORM_INTERESTS, userId], () => getFormInterestsById(userId));
};
