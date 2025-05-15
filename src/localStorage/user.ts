import { IUser } from '@/models/IUser';

const ACCESS_TOKEN = 'user-access';
const USER_FORM = 'user-form';

export const saveUser = (user: IUser) => {
  localStorage.setItem(USER_FORM, JSON.stringify(user));
};

export const getUser = (): IUser | null => {
  const user = localStorage.getItem(USER_FORM);
  return user ? JSON.parse(user) : null;
};

export const deleteUser = () => {
  localStorage.removeItem(USER_FORM);
};

export const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export const saveToken = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
};

export const deleteToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};
