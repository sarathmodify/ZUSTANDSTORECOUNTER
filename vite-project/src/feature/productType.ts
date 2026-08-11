export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
}

export interface CartItem extends Product {
    quantity: number;
};