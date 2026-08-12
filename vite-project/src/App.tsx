import {ProductCart} from "./components/ProductCart";
import { Cart } from "./components/cart";
import { ProductList } from "./components/ProductList";

function App() {
 

  return (
    <div>
      <h1>Welcome to the Product Store</h1>
      <ProductCart product={{ id: 1, title: "Product 1", price: 100, category: "Category 1" }} />
      <Cart />
      <ProductList />
    </div>
  )
}

export default App
