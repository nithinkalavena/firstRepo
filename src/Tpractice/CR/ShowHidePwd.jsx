import React, { useState } from 'react'

function ShowHidePwd() {
    let [showPassword,setShowPassword] = useState(false)
  return (
    <div>
        <input type={showPassword ? 'text':'password'} placeholder='EnterPassword'/>
        <button onClick={()=>setShowPassword(!showPassword)}>{showPassword?'Hide':'Show'}</button>
    </div>
  )
}

export default ShowHidePwd