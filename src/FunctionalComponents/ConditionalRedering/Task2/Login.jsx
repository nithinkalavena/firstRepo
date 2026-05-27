import React, { useState } from 'react'

function Login({role,handleLogin}) {
let [username,setUsername] = useState('')
let [password,setPassword] = useState('')

let loginBtn=()=>{
    if(!username.trim()||!password.trim()){
        alert(`${role} please enter username and password`)
    return
    }
    handleLogin()
}
  return (
    <div>
        <h3>{role} Login here</h3>
        <label htmlFor="">Username : </label>&nbsp;&nbsp;
        <input type="email" onChange={(e)=>setUsername(e.target.value)}/> <br /><br />
        <label htmlFor="">Password : </label>&nbsp;&nbsp;
        <input type="password" onChange={(e)=>setPassword(e.target.value)}/><br /><br />
        <button onClick={loginBtn}>Login</button>
    </div>
  )
}

export default Login