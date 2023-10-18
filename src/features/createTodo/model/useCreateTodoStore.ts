import { create } from 'zustand';
import { AxiosError } from 'axios';
import { todoService } from '@/shared/api';
import { devtools } from 'zustand/middleware';

interface CreateTodoStore {
  isCreating: boolean;
  createTodo: (userId: number, title: string) => Promise<void>;
}

const initialState = {
  isCreating: false,
};

export const useCreateTodoStore = create<CreateTodoStore>()(
  devtools((set) => ({
    ...initialState,
    createTodo: async (userId, title) => {
      set({ isCreating: true });

      try {
        await todoService.createTodo({ userId, title });
      } catch (e) {
        if (e instanceof AxiosError) console.log(e.message);

        throw e;
      } finally {
        set({ isCreating: false });
      }
    },
  })),
);
