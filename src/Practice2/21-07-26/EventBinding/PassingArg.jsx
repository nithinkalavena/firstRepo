export default function App() {
  const showMessage = (name) => {
    alert(`Hello, ${name}`);
  };

  return (
    <button onClick={() => showMessage("John")}>
      Say Hello
    </button>
  );
}