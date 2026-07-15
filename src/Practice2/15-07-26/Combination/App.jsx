import { useState, useMemo, useCallback } from "react";
import Child from "./Child";

export default function App() {
  const [count, setCount] = useState(0);

  // Memoize the object
  const user = useMemo(() => {
    return {
      name: "Babu",
      email: "babu@example.com",
    };
  }, []);

  // Memoize the function
  const greetUser = useCallback(() => {
    alert(`Hello ${user.name}`);
  }, [user]);

  return (
    <>
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <hr />

      <Child user={user} onGreet={greetUser} />
    </>
  );
}