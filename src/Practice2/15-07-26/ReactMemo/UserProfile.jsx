import { useMemo, useState } from "react";
import React from 'react'

const Child = React.memo(({ user }) => {
  console.log("User Profile Rendered");

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
});

export default function UserProfile() {
  const [count, setCount] = useState(0);

  let user = useMemo(()=>{
    return {
        name:'Tom',
        email:'tom@gmail.com'
    }
  },[])

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <Child user={user} />
    </>
  );
}