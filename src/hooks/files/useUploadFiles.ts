import { useAppMutation } from '@/hooks/useAppMutation';
import { uploadFiles } from '@/services/FilesService';

export const useUploadFiles = () => {
  return useAppMutation(uploadFiles);
};
