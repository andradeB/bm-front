export type User = {
  id: string;
  name: string;
};

export type AuthState = {
  token: string | null;
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};
