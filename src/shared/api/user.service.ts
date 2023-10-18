import { client } from './client.ts';
import { User } from '@/entities/user';

export const fetchAll = () => {
  return client.get<User[]>('/users');
};

export const fetchById = (id: number) => {
  return client.get<User>(`/users/${id}`);
};
