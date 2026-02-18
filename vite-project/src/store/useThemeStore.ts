import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ─── Types ───────────────────────────────────────────────
interface ThemeState {
    darkMode: boolean;

    // Actions
    toggleDarkMode: () => void;
}

// ─── Store ───────────────────────────────────────────────
export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            darkMode: false,

            toggleDarkMode: () =>
                set((state) => ({ darkMode: !state.darkMode })),
        }),
        {
            name: 'theme-storage', // localStorage key
        }
    )
);
