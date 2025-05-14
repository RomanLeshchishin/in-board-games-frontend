import { useAppMutation } from '@/hooks/useAppMutation';
import { updateProfile } from '@/services/ProfileService';

export const UseUpdateProfile = () => {
  return useAppMutation(updateProfile);
};
