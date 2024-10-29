import { create } from 'zustand';
import { BaseColor } from '@/constants/base-colors';

type Config = {
  theme: BaseColor['name'];
  radius: number;
};

type Actions = {
  setTheme: (theme: BaseColor['name']) => void;
  setRadius: (radius: number) => void;
};

export const useThemeConfig = create<Config & Actions>((set) => ({
  theme: 'zinc',
  radius: 0.5,
  setTheme: (theme) => set({ theme }),
  setRadius: (radius) => set({ radius })
}));
