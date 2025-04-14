import defineTheme from '@/utils/defineTheme'
import { create } from 'zustand'
import { persist } from "zustand/middleware"

interface ThemeStore {
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: "dark",
      setTheme: (theme) => {
        defineTheme(theme)
        set({ theme })
      },
      toggleTheme: () => {
        const currentTheme = get().theme
        const newTheme = currentTheme === "light" ? "dark" : "light"

        defineTheme(newTheme)
        
        set({ theme: newTheme })
      },
    }),
    {
      name: "theme-storage"
    }
  )
)