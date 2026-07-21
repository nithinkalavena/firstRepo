export default function App() {
  return (
    <button
      onMouseEnter={() => console.log("Mouse entered")}
      onMouseLeave={() => console.log("Mouse left")}
    >
      Hover Me
    </button>
  );
}