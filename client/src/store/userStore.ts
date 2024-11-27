import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id?: string;
  name: string;
  avatar?: string;
}

interface UserStore {
  user: User | null;
  updateUser: (userData: Partial<User>) => Promise<void>;
}

export const useUser = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      updateUser: async (userData) => {
        // In a real app, you'd make an API call here
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : { name: '', ...userData },
        }));
      },
    }),
    {
      name: 'user-storage',
    }
  )
);