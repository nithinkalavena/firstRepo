import { useState, memo } from "react";

const Child = memo(function Child({ name }) {
  console.log("Child Rendered");
  return <h2>Name: {name}</h2>;
});

export default function App() {
  const [count, setCount] = useState(0);

  console.log("Parent Rendered");

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child name="John" />
    </div>
  );
}