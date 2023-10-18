import { create } from 'zustand';
import { Todo } from '@/entities/todo';
import _ from 'lodash';

export type Sort = 'asc' | 'desc';

interface SortTodosStore {
  selectedSort: Sort;
  setSort: (sort: Sort) => void;
  sortTodos: (todos: Todo[]) => Todo[];
}

export const useSortTodosStore = create<SortTodosStore>()((set, get) => ({
  selectedSort: 'asc',
  setSort: (sort) => set({ selectedSort: sort }),
  sortTodos: (todos) => _.orderBy<Todo>(todos, ['id'], [get().selectedSort]),
}));
