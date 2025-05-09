export enum Role {
  USER = 'user',
  MANAGER = 'manager',
  ADMIN = 'admin',
}

export interface IUser {
  id: string;
  email: string;
  role: Role;
  firstName: string;
  lastName: string;
}
