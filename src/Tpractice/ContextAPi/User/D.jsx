import React, { useContext } from 'react'
import { AuthContext } from './A'

function D() {
    let {user,logout} = useContext(AuthContext)    
  return (
    <div>
        <h2>Welcome {user}</h2>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default D