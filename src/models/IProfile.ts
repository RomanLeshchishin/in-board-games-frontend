import { IUser } from '@/models/IUser';

export interface IProfile {
  id: string;
  userId: string;
  user: IUser;
  avatar: string | null;
  age: number | null;
  about: string | null;
}

export interface UpdateProfileData {
  user: IUser;
  profile: IProfile;
}
