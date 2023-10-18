import { create } from 'zustand';
import { User } from '@/entities/user';
import { userService } from '@/shared/api';

interface SidebarStore {
  users: User[];
  isLoading: boolean;
  fetchUsers: () => Promise<void>;
}

export const useSidebarStore = create<SidebarStore>()((set) => ({
  users: [],
  isLoading: false,
  fetchUsers: async () => {
    set({ isLoading: true });

    const { data: users } = await userService.fetchAll();

    set({ users, isLoading: false });
  },
}));
