import { useCallback, useState } from "react";
import React from 'react'
const Child = React.memo(({ onClick }) => {
  console.log("Child Rendered");

  return <button onClick={onClick}>Click Me</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);
// let handleClick = ()=> console.log('Button clicked')

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>&nbsp;&nbsp;

      <Child onClick={handleClick} />
    </>
  );
// Clicking Increment updates only the parent.
// Child does not re-render because handleClick keeps the same function reference.
}