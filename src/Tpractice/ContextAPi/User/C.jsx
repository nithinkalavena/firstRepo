import React, { useContext, useState } from 'react'
import { AuthContext } from './A'

function C() {
    let [name,setName] = useState('')
    let {login} = useContext(AuthContext)

    let handleLogin = ()=>{
        {
            if(!name.trim()){
                alert('Enter the User Name')
            return
        }
        login(name)}
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>&nbsp;&nbsp;
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default C