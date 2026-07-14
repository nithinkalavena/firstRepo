import { useState, memo } from "react";
import React from 'react'

const Child = React.memo(({ user }) => {
  console.log("Child Rendered");
  return <h2>{user.name}</h2>;
});

export default function ChangeUser() {
    
  const [user, setUser] = useState({
    name: "John",
  });
  let [count,setCount] = useState(0)
  console.log('parent rendered')
  const changeName = () => {    
    setUser({
        ...user,
        name:'Nithin'
    });
  };

  return (
    <div>
      <button onClick={changeName}>Change Name</button>&nbsp;&nbsp;
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <Child user={user} />
      {count}
    </div>
  );
}