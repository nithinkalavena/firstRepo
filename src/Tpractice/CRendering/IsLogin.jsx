import React, { useState } from 'react'

function IsLogin() {
    let [isLoggedIn,setLoggedIn] = useState(false)
  return (
    <div>
        <h2>Auth App</h2>
        {
            isLoggedIn ? (
                <>
                <h3>Welcome Nithin</h3>
                <button onClick={()=>setLoggedIn(false)}>Logout</button>
                </>
            ):(
                <>
                <button onClick={()=>setLoggedIn(true)}>Login</button>
                </>
            )
        }
    </div>
  )
}

export default IsLogin