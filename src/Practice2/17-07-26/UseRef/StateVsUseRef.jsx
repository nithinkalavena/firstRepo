import { useState, useRef } from "react";

export default function StateVsUseRef() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  return (
    <>
      <h2>State: {stateCount}</h2>
      <h2>Ref: {refCount.current}</h2>

      <button
        onClick={() => {
          setStateCount(stateCount + 1);
        }}
      >
        State++
      </button>&nbsp;&nbsp;

      <button
        onClick={() => {
          refCount.current++;
          console.log(refCount.current);
        }}
      >
        Ref++
      </button>
    </>
  );
}