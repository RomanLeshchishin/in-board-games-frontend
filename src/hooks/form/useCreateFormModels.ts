import { useAppMutation } from '@/hooks/useAppMutation';
import { createFormModels } from '@/services/FormModelsService';

export const useCreateFormModels = () => {
  return useAppMutation(createFormModels);
};
