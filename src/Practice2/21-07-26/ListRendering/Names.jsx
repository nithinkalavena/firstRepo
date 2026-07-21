function Names() {
  const names = ["Alice", "Bob", "Charlie", "David"];

  return (
    <div>
      <h2>Students</h2>

      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}

export default Names;