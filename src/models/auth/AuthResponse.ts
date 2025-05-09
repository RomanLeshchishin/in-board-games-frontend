import { IUser } from '@/models/IUser';

export interface AuthResponse {
  user: IUser;
  accessToken: string;
}
