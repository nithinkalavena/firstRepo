import { useState, useEffect, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <>
      <h2>Current: {count}</h2>
      <h2>Previous: {prevCount.current}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}