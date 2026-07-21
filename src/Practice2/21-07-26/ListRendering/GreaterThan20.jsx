function GreaterThan20() {
  const numbers = [10, 15, 20, 25, 30];

  return (
    <div>
      <h2>Numbers greater than 20 in the array</h2>
      {numbers
        .filter((num) => num > 20)
        .map((num) => (
          <p key={num}>{num}</p>
        ))}
    </div>
  );
}

export default GreaterThan20;