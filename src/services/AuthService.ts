import { api } from '@/api';
import { Role } from '@/models/IUser';
import { LoginData, RegisterData } from '@/models/auth/AuthData';
import { AuthResponse } from '@/models/auth/AuthResponse';

type RegisterArgs = {
  payload: RegisterData;
  role: Role;
};

export const register = async ({ payload, role }: RegisterArgs): Promise<AuthResponse> => {
  const { data } = await api.post(`/auth/register/${role}`, payload);
  return data;
};

export const login = async (payload: LoginData): Promise<AuthResponse> => {
  const { data } = await api.post(`/auth/login`, payload);
  return data;
};

export const logout = () => {
  return api.post('/auth/logout');
};
