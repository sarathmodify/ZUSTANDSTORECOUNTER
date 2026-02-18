import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ─── Types ───────────────────────────────────────────────
export interface User {
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
    isLoggedIn: boolean;

    // Actions
    login: (name: string, email: string) => void;
    logout: () => void;
}

// ─── Store ───────────────────────────────────────────────
export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isLoggedIn: false,

            login: (name: string, email: string) =>
                set({
                    user: { name, email },
                    isLoggedIn: true,
                }),

            logout: () =>
                set({
                    user: null,
                    isLoggedIn: false,
                }),
        }),
        {
            name: 'auth-storage', // localStorage key
        }
    )
);
