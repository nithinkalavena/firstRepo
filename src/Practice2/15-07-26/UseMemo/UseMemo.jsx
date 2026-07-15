import { useMemo, useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const factorial = useMemo(() => {
    console.log("Calculating...");

    let result = 1;

    for (let i = 1; i <= number; i++) {
      result *= i;
    }

    return result;
  }, [number]);

  return (
    <>
      <h2>Factorial: {factorial}</h2>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>&nbsp;&nbsp;

      <button onClick={() => setNumber(number + 1)}>
        Number: {number}
      </button>
    </>

        // Clicking Count → No recalculation.
        // Clicking Number → Recalculates factorial.
        // This avoids repeating expensive work when unrelated state changes.
  );
}