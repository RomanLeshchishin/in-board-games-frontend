import { useAppMutation } from '@/hooks/useAppMutation';
import { register } from '@/services/AuthService';
import { saveToken, saveUser } from '@/localStorage/user';

export const useRegister = () => {
  return useAppMutation(register, {
    onSuccess: data => {
      console.log(data);
      saveToken(data.accessToken);
      saveUser(data.user);
    },
    onError: error => {
      console.error('Ошибка при регистрации:', error);
    },
  });
};
