import api from '../../shared/api/axios';

export const login = async (username: string, password: string) => {
  const response = await api.post('/login', { username, password });
  return response.data;
};
