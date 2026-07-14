import { useState, memo } from "react";

const Product = memo(({ name, price }) => {
  console.log(`${name} Rendered`);

  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
});

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <h2>Cart: {cartCount}</h2>

      <button onClick={() => setCartCount(cartCount + 1)}>
        Add to Cart
      </button>

      <Product name="Laptop" price={50000} />
      <Product name='Mouse' price={200}/>
      <Product name='Keyboard' price={500}/>
    </>
  );
}