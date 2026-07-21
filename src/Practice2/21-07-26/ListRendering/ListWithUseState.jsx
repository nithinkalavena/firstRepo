import { useState } from "react";

function ListWithUseState() {
  const [fruits] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Mango",
  ]);

  return (
    <div>
      <h2>Fruits</h2>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListWithUseState;