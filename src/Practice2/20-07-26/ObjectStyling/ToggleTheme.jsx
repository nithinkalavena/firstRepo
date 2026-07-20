import { useState } from "react";

function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  const pageStyle = {
    backgroundColor: darkMode ? "#222" : "#fff",
    color: darkMode ? "#fff" : "#000",
    height: "100vh",
    padding: "20px",
  };

  return (
    <div style={pageStyle}>
      <h1>Theme Example</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ToggleTheme;