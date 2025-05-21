import { useAppMutation } from '@/hooks/useAppMutation';
import { filterByManyAuth } from '@/services/FiltersService';
import { useQueryClient } from '@tanstack/react-query';
import { QueryKey } from '@/const/queryKey';

export const useFilterAuth = () => {
  const queryClient = useQueryClient();

  return useAppMutation(filterByManyAuth, {
    onSuccess: data => {
      queryClient.setQueryData([QueryKey.PROFILE_CARDS], data);
    },
    onError: error => {
      console.error('Ошибка при фильтрации:', error);
    },
  });
};
