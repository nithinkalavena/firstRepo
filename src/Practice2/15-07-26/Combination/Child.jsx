import React from "react";

const Child = React.memo(({ user, onGreet }) => {
  console.log("Child Rendered");

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      <button onClick={onGreet}>Greet</button>
    </div>
  );
});

export default Child;