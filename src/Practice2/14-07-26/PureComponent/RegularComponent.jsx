import { useState } from "react";

function Child({ name }) {
  console.log("Child Rendered");
  return <h2>Name: {name}</h2>;
}

// Regular Component:
// Every time the parent renders, the child also renders, even though the name prop never changes.
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