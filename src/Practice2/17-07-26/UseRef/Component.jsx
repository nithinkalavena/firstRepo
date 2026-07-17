import { useRef } from "react";

export default function Counter() {
  const countRef = useRef(0);

  function handleClick() {
    countRef.current++;
    console.log(countRef.current);
  }

  return <button onClick={handleClick}>Click</button>;
}