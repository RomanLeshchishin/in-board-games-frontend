import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { getUser } from '@/localStorage/user';

export function useAppQueryAuth<TData, TError = unknown, TVariables = void>(
  queryKey: QueryKey,
  queryFn: (variables: TVariables) => Promise<TData>,
  variables?: TVariables,
  options?: Omit<UseQueryOptions<TData, TError, TData, QueryKey>, 'queryKey' | 'queryFn' | 'enabled'>,
) {
  const user = getUser();
  if (user) {
    return useQuery({
      queryKey: variables ? [...queryKey, variables] : queryKey,
      queryFn: () => queryFn(variables as TVariables),
      retry: 1,
      staleTime: 1000 * 60 * 60 * 4, // 4 часа
      refetchOnWindowFocus: false,
      ...options,
    });
  }

  return { data: [], isError: 'Unauthorized' };
}
