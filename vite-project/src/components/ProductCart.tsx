import type { Product } from "../feature/productType";
import useCartStore from "../store/store";

interface ProductCardProps {
  product: Product;
}

export const ProductCart = ({
  product,
}: ProductCardProps) => {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const items = useCartStore((state) => state.items);

  console.log("ProductCart rendered", product, items);

  return (
    <div>
      <h2>{product.title}</h2>

      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};