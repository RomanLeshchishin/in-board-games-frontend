import { useAppMutation } from '@/hooks/useAppMutation';
import { createForm } from '@/services/FormsService';

export const useCreateForm = () => {
  return useAppMutation(createForm);
};
