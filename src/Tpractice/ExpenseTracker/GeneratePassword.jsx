import React, { useState } from 'react'

function GeneratePassword() {
    let [password,setPassword] = useState('')
    let generatePassword = ()=>{
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
        let newPassword = ''
        for(let i=0; i<8; i++){
            let randomIndex = Math.floor(Math.random()*chars.length)
            newPassword+=chars[randomIndex]
        }
        setPassword(newPassword)
    }
  return (
    <div style={{textAlign:'center',marginTop:'100px'}}>
        <h1>Password Generator</h1>
        <h2>{password}</h2>
        <button onClick={generatePassword}>Generate Password</button>
    </div>
  )
}

export default GeneratePassword