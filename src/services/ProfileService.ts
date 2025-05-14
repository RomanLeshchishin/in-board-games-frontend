import { api } from '@/api';
import { IProfile, UpdateProfileData } from '@/models/IProfile';

export const getProfileById = async (id: string): Promise<IProfile> => {
  const { data } = await api.get(`/profile/id/${id}`);
  return data;
};

export const getAllProfiles = async (): Promise<IProfile[]> => {
  const { data } = await api.get('/profile/all');
  return data;
};

export const updateProfile = async (payload: Partial<UpdateProfileData>): Promise<UpdateProfileData> => {
  const { data } = await api.put('/profile', payload);
  return data;
};
