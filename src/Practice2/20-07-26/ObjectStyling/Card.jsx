function Card() {
  const cardStyle = {
    width: "300px",
    padding: "20px",
    margin: "30px auto",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0 0 10px gray",
    textAlign: "center",
  };

  return (
    <div style={cardStyle}>
      <h2>Nithin K</h2>
      <p>React Developer</p>
    </div>
  );
}

export default Card;