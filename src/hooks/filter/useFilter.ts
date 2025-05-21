import { useAppMutation } from '@/hooks/useAppMutation';
import { filterByMany } from '@/services/FiltersService';
import { useQueryClient } from '@tanstack/react-query';
import { QueryKey } from '@/const/queryKey';

export const useFilter = () => {
  const queryClient = useQueryClient();

  return useAppMutation(filterByMany, {
    onSuccess: data => {
      queryClient.setQueryData([QueryKey.PROFILE_CARDS], data);
    },
    onError: error => {
      console.error('Ошибка при фильтрации:', error);
    },
  });
};
