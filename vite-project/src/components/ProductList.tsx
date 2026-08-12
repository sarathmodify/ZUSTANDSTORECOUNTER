import { useEffect } from "react";
import useProductStore from "../store/useProductStore";

export const ProductList = () => {
    const { products, loading, error, fetchProducts } = useProductStore();
    
    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.slice(0, 5).map((product) => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <p>${product.price.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}