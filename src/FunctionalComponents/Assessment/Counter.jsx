import React, { useState } from 'react'

function Counter() {
    let [count,setCount] = useState(0)
    let inc = ()=>{
        setCount(count+1)
    }
    let dec = ()=>{
        setCount(count-1)
    }
    let reset = ()=>{
        setCount(0)
    }
  return (
    <div>
        <h3>Counter: {count}</h3>
        <button onClick={()=>inc()}>Inc</button>&nbsp;&nbsp;
        <button onClick={()=>dec()}>Dec</button>&nbsp;&nbsp;
        <button onClick={()=>reset()}>Reset</button>
    </div>
  )
}

export default Counter