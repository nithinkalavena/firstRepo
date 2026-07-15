import { useCallback, useState } from "react";
import React from 'react'
const Child = React.memo(({ onDelete }) => {
  console.log("Delete Button Rendered");

  return <button onClick={onDelete}>Delete</button>;
});

export default function DeleteButton() {
  const [count, setCount] = useState(0);

  const deleteItem = useCallback(() => {
    console.log("Item Deleted");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>&nbsp;&nbsp;

      <Child onDelete={deleteItem} />
    </>
  );
}