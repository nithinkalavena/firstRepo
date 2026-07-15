import { memo, useState } from "react";
import React from 'react'

let ChildMemo = React.memo(function Child({ name }) {
  console.log("Child Rendered");
  return <h2>{name}</h2>;
})

// Now the child renders only once because its props remain the same
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <ChildMemo name="This is React.Memo" />
    </>
  );
}