import { useAppMutation } from '@/hooks/useAppMutation';
import { filterByMany } from '@/services/FiltersService';
import { useQueryClient } from '@tanstack/react-query';

export const useFilter = () => {
  const queryClient = useQueryClient();

  return useAppMutation(filterByMany, {
    onSuccess: data => {
      queryClient.setQueryData(['profileCards'], data);
    },
    onError: error => {
      console.error('Ошибка при фильтрации:', error);
    },
  });
};
