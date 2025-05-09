import { useAppMutation } from '@/hooks/useAppMutation';
import { logout } from '@/services/AuthService';
import { deleteToken, deleteUser } from '@/localStorage/user';

export const useLogout = () => {
  return useAppMutation(logout, {
    onSuccess() {
      deleteUser();
      deleteToken();
    },
    onError: error => {
      console.error('Ошибка при выходе:', error);
    },
  });
};
