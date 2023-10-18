import { client } from './client.ts';
import { Todo } from '@/entities/todo';

export const fetchByUserId = (userId: number) => {
  return client.get(`users/${userId}/todos`);
};

export const createTodo = (todo: Pick<Todo, 'title' | 'userId'>) => {
  return client.post(`users/${todo.userId}/todos`, todo);
};
