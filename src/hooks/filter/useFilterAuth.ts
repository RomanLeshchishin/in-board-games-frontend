import { useAppMutation } from '@/hooks/useAppMutation';
import { filterByManyAuth } from '@/services/FiltersService';
import { useQueryClient } from '@tanstack/react-query';

export const useFilterAuth = () => {
  const queryClient = useQueryClient();

  return useAppMutation(filterByManyAuth, {
    onSuccess: data => {
      queryClient.setQueryData(['profileCards'], data);
    },
    onError: error => {
      console.error('Ошибка при фильтрации:', error);
    },
  });
};
