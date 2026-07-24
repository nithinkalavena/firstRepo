import { useState } from "react";

export default function HeavyCal() {
  const [count, setCount] = useState(0);

  function heavyCalculation() {
    // Simulate heavy work
    for (let i = 0; i < 1000000000; i++) {}
  }

  function handleClick() {
    setCount(count + 1);
    heavyCalculation();
  }

  return (
    <>
    <button onClick={handleClick}>
      Count
    </button> &nbsp;&nbsp;
    {count}
    </>
  );
}