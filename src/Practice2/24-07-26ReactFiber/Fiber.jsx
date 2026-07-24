import { useState } from "react";

export default function Fiber() {
  const [search, setSearch] = useState("");

  // Simulate a large list
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

        {/* Without Fiber: React renders all 10,000 items in one uninterrupted task.

        With Fiber: React can split the rendering into smaller units, pause between them, 
        let the browser handle urgent work (like showing the typed character), and then 
        continue rendering the rest of the list. This is what makes modern React applications feel more responsive. */}
    </>
  );
}