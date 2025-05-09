import { useMutation, UseMutationOptions } from '@tanstack/react-query';

export function useAppMutation<TData, TError = unknown, TVariable = void>(
  mutationFn: (inputData: TVariable) => Promise<TData>,
  requestOptions?: UseMutationOptions<TData, TError, TVariable>,
) {
  return useMutation({
    mutationFn,
    retry: 0,
    ...requestOptions,
  });
}
