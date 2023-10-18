import { create } from 'zustand';
import { Todo } from '@/entities/todo';
import { AxiosError } from 'axios';
import { todoService, userService } from '@/shared/api';
import { User } from '@/entities/user';

interface TodoListPageModel {
  todos: Todo[];
  user: User | null;
  isLoading: boolean;
  toggleIsLoading: () => void;
  fetchData: (userId: number) => Promise<void>;
}

export const useTodoListPageModel = create<TodoListPageModel>()((set) => ({
  todos: [],
  user: null,
  isLoading: false,
  toggleIsLoading: () => set((state) => ({ isLoading: !state.isLoading })),
  fetchData: async (userId) => {
    set({ isLoading: true });

    try {
      const [{ data: todos }, { data: user }] = await Promise.all([
        todoService.fetchByUserId(userId),
        userService.fetchById(userId),
      ]);

      set({ todos, user });
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error(e.message);
      }
    }

    set({ isLoading: false });
  },
}));
