import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

interface UserStore {
  user: User | null;
  updateUser: (userData: Partial<User>) => Promise<void>;
}

export const useUser = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      updateUser: async (userData) => {
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