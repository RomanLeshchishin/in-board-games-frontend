import { useAppMutation } from '@/hooks/useAppMutation';
import { login } from '@/services/AuthService';
import { saveToken, saveUser } from '@/localStorage/user';

export const useLogin = () => {
  return useAppMutation(login, {
    onSuccess: data => {
      saveToken(data.accessToken);
      saveUser(data.user);
    },
    onError: error => {
      console.error('Ошибка при входе:', error);
    },
  });
};
