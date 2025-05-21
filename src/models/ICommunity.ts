export interface ICommunity {
  id: string;
  userId: string;
  title: string;
  description: string | null;
  avatar: string | null;
  participants: number;
}
