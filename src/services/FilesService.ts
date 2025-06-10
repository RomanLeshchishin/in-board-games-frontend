import { api } from '@/api';
import { FileModelType, IFileEntity } from '@/models/IFile';

export interface UploadResponse {
  files: IFileEntity[];
}

type UploadFilesArgs = {
  files: File[];
  modelId: string;
  modelType: FileModelType;
};

export const uploadFiles = async ({ files, modelId, modelType }: UploadFilesArgs): Promise<UploadResponse> => {
  const formData = new FormData();
  files.forEach(file => formData.append('files', file));
  formData.append('modelId', modelId);
  formData.append('modelType', modelType);

  const { data } = await api.post('/files', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

export const getPublicFileById = async (id: string, modelType: FileModelType): Promise<IFileEntity> => {
  const { data } = await api.get('/files/single', {
    params: { id, modelType },
  });
  return data;
};

export const getProtectedFileById = async (id: string): Promise<IFileEntity> => {
  const { data } = await api.get(`/files/single-protected/${id}`);
  return data;
};

export const getPublicFilesByModelId = async (modelId: string, modelType: FileModelType): Promise<IFileEntity[]> => {
  const { data } = await api.get('/files/all/', {
    params: { modelId, modelType },
  });
  return data;
};

export const getProtectedFilesByModelId = async (
  modelId: string,
  modelType?: FileModelType,
): Promise<IFileEntity[]> => {
  const { data } = await api.get('/files/all-protected/', {
    params: { modelId, modelType },
  });
  return data;
};

export const deleteFileById = async (id: string): Promise<void> => {
  const { data } = await api.delete(`/files/${id}`);
  return data;
};
