import { create } from 'zustand'

type ColorTheme = 'light' | 'dark' | 'system'

interface ColorThemeStore {
  theme: ColorTheme
  setTheme: (theme: ColorTheme) => void
}

export const useColorTheme = create<ColorThemeStore>((set) => ({
  theme: 'system',
  setTheme: (theme) => set({ theme }),
}))
