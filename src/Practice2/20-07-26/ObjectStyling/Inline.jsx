function Inline() {
  const buttonStyle = {
    backgroundColor: "orange",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"        
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "purple" }}>React Inline Styling</h1>
      <button style={buttonStyle}>Click Me</button>
    </div>
  );
}

export default Inline;