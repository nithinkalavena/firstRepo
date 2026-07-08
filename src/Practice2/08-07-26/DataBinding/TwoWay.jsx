import React, { useState } from 'react'

function TwoWay() {
    let [username,setUsername] = useState('')
  return (
    <div>
        <input type="text" placeholder='Enter something' value={username} onChange={e=>setUsername(e.target.value)}/>
        <p>Typed: {username}</p>
    </div>
  )
}

export default TwoWay