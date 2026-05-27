import React, { useState } from 'react'

function ZoneCounter() {
    let [count,setCount] = useState(0)
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count-1)}>Decrement</button>&nbsp;&nbsp;
        <button onClick={()=>setCount(count+1)}>Increment</button>
        {count < 0 && <p style={{color:'red'}}>🔴 Negative Zone</p>}
        {count > 0 && <p style={{color:'green'}}>🟢 Positive Zone</p>}
        {count === 0 && <p>🔘 Neutral</p>}
    </div>
  )
}

export default ZoneCounter