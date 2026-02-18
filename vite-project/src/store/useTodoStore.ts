import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

// ─── Types ───────────────────────────────────────────────
export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    createdAt: number;
}

export type FilterType = 'all' | 'active' | 'completed';

// ─── Store State + Actions ───────────────────────────────
interface TodoState {
    todos: Todo[];
    filter: FilterType;
    searchQuery: string;

    // Actions
    addTodo: (text: string) => void;
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
    editTodo: (id: string, newText: string) => void;
    setFilter: (filter: FilterType) => void;
    setSearchQuery: (query: string) => void;

    // Derived getters
    getFilteredTodos: () => Todo[];
    getStats: () => {
        total: number;
        completed: number;
        active: number;
        completionPercent: number;
    };
}

// ─── Store ───────────────────────────────────────────────
export const useTodoStore = create<TodoState>()(
    persist(
        (set, get) => ({
            // Initial state
            todos: [],
            filter: 'all',
            searchQuery: '',

            // Actions
            addTodo: (text: string) =>
                set((state) => ({
                    todos: [
                        {
                            id: uuidv4(),
                            text,
                            completed: false,
                            createdAt: Date.now(),
                        },
                        ...state.todos,
                    ],
                })),

            deleteTodo: (id: string) =>
                set((state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id),
                })),

            toggleTodo: (id: string) =>
                set((state) => ({
                    todos: state.todos.map((todo) =>
                        todo.id === id
                            ? { ...todo, completed: !todo.completed }
                            : todo
                    ),
                })),

            editTodo: (id: string, newText: string) =>
                set((state) => ({
                    todos: state.todos.map((todo) =>
                        todo.id === id ? { ...todo, text: newText } : todo
                    ),
                })),

            setFilter: (filter: FilterType) => set({ filter }),

            setSearchQuery: (query: string) => set({ searchQuery: query }),

            // Derived: filtered + searched todos
            getFilteredTodos: () => {
                const { todos, filter, searchQuery } = get();
                let filtered = todos;

                // Apply filter
                if (filter === 'active') {
                    filtered = filtered.filter((t) => !t.completed);
                } else if (filter === 'completed') {
                    filtered = filtered.filter((t) => t.completed);
                }

                // Apply search
                if (searchQuery.trim()) {
                    const q = searchQuery.toLowerCase();
                    filtered = filtered.filter((t) =>
                        t.text.toLowerCase().includes(q)
                    );
                }

                return filtered;
            },

            // Derived: stats
            getStats: () => {
                const { todos } = get();
                const total = todos.length;
                const completed = todos.filter((t) => t.completed).length;
                const active = total - completed;
                const completionPercent =
                    total === 0 ? 0 : Math.round((completed / total) * 100);

                return { total, completed, active, completionPercent };
            },
        }),
        {
            name: 'todo-storage', // localStorage key
        }
    )
);
