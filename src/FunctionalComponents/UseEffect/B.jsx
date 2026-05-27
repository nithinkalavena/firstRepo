import React, { useEffect, useState } from 'react'

function B() {
    let [a,setA] = useState('')
    useEffect(()=>{
        console.log(a)
    },[a])

    let handleSubmit =(e)=>{
        console.log('event called 2')
        setA(e.target.value)
    }
  return (
    <div>
      <input type="text" onChange={handleSubmit} /> <br /> <br />
      <h2>{a}</h2>
    </div>
  )
}

export default B