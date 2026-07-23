export default function Button() {
  const handleClick = ({ target }) => {
    console.log(target.innerText);
  };

  return <button onClick={handleClick}>Click Me</button>;
}