import { useMemo, useState } from "react";

export default function Filtering() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const products = ["Laptop", "Phone", "Mouse", "Keyboard"];

  const filteredProducts = useMemo(() => {
    console.log("Filtering Products");

    return products.filter((product) =>
      product.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />&nbsp;&nbsp;

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      {filteredProducts.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </>
  );
}