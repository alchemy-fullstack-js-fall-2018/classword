import { post, get } from './request';

export const signup = ({ email, password }) => {
  return post('/api/auth/signup', { email, password });
};

export const login = ({ email, password }) => {
  return post('/api/auth/login', { email, password });
};

export const verifySession = () => {
  return get('/api/auth/verify');
};
