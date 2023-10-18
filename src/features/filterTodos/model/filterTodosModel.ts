import { create } from 'zustand';
import { Filter } from './types.ts';
import { Todo } from '@/entities/todo';

interface FilterTodosModel {
  selectedFilter: Filter;
  setFilter: (filter: Filter) => void;
  filterTodos: (todos: Todo[]) => Todo[];
}

export const useFilterTodosModel = create<FilterTodosModel>()((set, get) => ({
  selectedFilter: 'all',
  setFilter: (filter: Filter) => set({ selectedFilter: filter }),
  filterTodos: (todos: Todo[]) => {
    switch (get().selectedFilter) {
      case 'all':
        return todos;
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'uncompleted':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  },
}));
