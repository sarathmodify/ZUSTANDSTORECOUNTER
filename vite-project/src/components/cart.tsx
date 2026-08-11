import useCartStore from "../store/store";

export const Cart = () => {
  const items = useCartStore(
    (state) => state.items
  );

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>

          <p>
            ₹{item.price} × {item.quantity}
          </p>

          <button
            onClick={() =>
              decreaseQuantity(item.id)
            }
          >
            -
          </button>

          <button
            onClick={() =>
              increaseQuantity(item.id)
            }
          >
            +
          </button>

          <button
            onClick={() =>
              removeFromCart(item.id)
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};