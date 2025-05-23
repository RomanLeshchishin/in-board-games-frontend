import { IUser } from '@/models/IUser';

export interface IProfile {
  id: string;
  userId: string;
  user: IUser;
  avatar?: string;
  age?: number;
  about?: string;
}

export interface UpdateProfileData {
  user: IUser;
  profile: IProfile;
}
