import React, { useState } from 'react'

function Username() {
    let [username,setUsername] = useState('')

    let validateUsername = ()=>{
        if(username.length<5)
            return 'Username must be atleast  characters'
        if(username.includes(' '))
            return 'Spaces are not allowed'
        if(!/^[a-zA-Z0-9]+$/.test(username))
            return 'Only letters and numbers allowed'
        return 'valid username'
    }
  return (
    <div style={{textAlign:'center',marginTop:'30px'}}>
        <h2>Username validator</h2>
        <input type="text" placeholder='Enter username' value={username} onChange={e=>setUsername(e.target.value)}/>
        <h3>{validateUsername()}</h3>
    </div>
  )
}

export default Username