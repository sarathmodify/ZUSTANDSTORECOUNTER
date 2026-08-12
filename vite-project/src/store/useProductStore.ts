import {create} from 'zustand';
import type {Product} from '../feature/productType';


interface ProductState {
    products: Product[],
    loading: boolean,
    error: string | null,
    fetchProducts: () => Promise<void>
}

const useProductStore = create<ProductState>((set)=>({
    products: [],
    loading: false,
    error: null,
    fetchProducts: async () => {
        try {
            set({loading: true, error: null});
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            set({products: data, loading: false});
        } catch (error) {
            set({loading: false, error: (error as Error).message});
        }
    }
}));
export default useProductStore;
