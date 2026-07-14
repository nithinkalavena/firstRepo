import React, { useState } from 'react'

function CounterWihLimits() {
    let [count,setCount] = useState(0)
    let min = 0
    let max = 10
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count-1)} disabled={count===min}>Decrement</button>&nbsp;&nbsp;
        <button onClick={()=>setCount(count+1)} disabled={count===max}>Increment</button>
        {count === min && <p>&#9888; Min Reached</p>}
        {count === max && <p>&#128293; Max Reached</p>}
    </div>
  )
}

export default CounterWihLimits