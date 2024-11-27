import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Theme } from '../types';
import { THEME_STORAGE_KEY } from '../utils/constants';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    {
      name: THEME_STORAGE_KEY,
    }
  )
);