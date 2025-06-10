import { useAppQueryAuth } from '@/hooks/useAppQueryAuth';
import { QueryKey } from '@/const/queryKey';
import { getPublicFileById } from '@/services/FilesService';
import { FileModelType } from '@/models/IFile';

export const useAvatarByFileId = (id: string) => {
  return useAppQueryAuth([QueryKey.AVATAR], () => getPublicFileById(id, FileModelType.AVATAR));
};
