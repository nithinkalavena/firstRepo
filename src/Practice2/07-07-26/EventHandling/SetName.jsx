import React, { useState } from 'react'

function SetName() {
    let [name,setName] = useState('')
    let handleChange = (e)=>{
        setName(e.target.value)
    }
  return (
    <div>
        <input type="text" placeholder='Enter name' onChange={handleChange}/>
        <h2>Name: {name}</h2>
    </div>
  )
}

export default SetName