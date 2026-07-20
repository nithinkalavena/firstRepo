import { useState } from "react";

function Conditional() {
  let [isLoggedIn,setisLoggedIn] = useState(true)

  return (
    <div>
      <h2
        style={{
          color: isLoggedIn ? "green" : "red",
        }}
      >
        {isLoggedIn ? "Logged In" : "Logged Out"} <br />
        <button onClick={()=>setisLoggedIn(!isLoggedIn)}>Change</button>
      </h2>
    </div>
  );
}

export default Conditional;