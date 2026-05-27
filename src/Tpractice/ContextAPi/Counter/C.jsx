import React, { useContext } from 'react'
import { countContext } from './A'

function C() {
    let {count,setCount} = useContext(countContext)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)} style={{marginLeft:'10px'}}>Decrement</button>
    </div>
  )
}

export default C