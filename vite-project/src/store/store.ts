import type {Product,CartItem} from '../feature/productType';
import { create } from 'zustand';

interface CartState {
    items: CartItem[],
    addToCart: (product:Product) => void,
    removeFromCart: (productId:number) => void,
    increaseQuantity: (productId:number) => void,
    decreaseQuantity: (productId:number) => void,
    clearCart: () => void
}

const useCartStore = create<CartState>((set)=>({
    items: [],
    addToCart: (product:Product) => set((state)=> {
        const existingItem = state.items.find(item => item.id === product.id);
        if (existingItem) {
            return { items: state.items.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) };
        } else {
            return { items: [...state.items, { ...product, quantity: 1 }] };
        }
    }),
    removeFromCart: (productId:number) => set((state)=> {
        return { items: state.items.filter(item => item.id !== productId) };
    }),
    increaseQuantity: (productId:number) => set((state)=> {
        return { items: state.items.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item) };
    }),
    decreaseQuantity: (productId:number) => set((state)=> {
        return { items: state.items.map(item => item.id === productId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item) };
    }),
    clearCart: () => set({ items: [] })
}));


export default useCartStore;