import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <p>{name}</p>
    </>
  );
}