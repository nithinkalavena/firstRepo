export default function App() {
  return (
    <input
      onKeyDown={(e) => console.log("Key:", e.key)}
      placeholder="Type here"
    />
  );
}