function ProductCard({ product }) {
  const { title, price, rating, inStock } = product;

  return (
    <div>
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Rating: ⭐ {rating}</p>
      <p>{inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}

export default function App() {
  const product = {
    title: "iqoo 15r",
    price: 999,
    rating: 4.8,
    inStock: true,
  };

  return <ProductCard product={product} />;
}