import { useRef } from "react";

export default function Timer() {
  const timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      console.log("Running...");
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
  }

  return (
    <>
      <button onClick={startTimer}>Start</button>&nbsp;&nbsp;
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}