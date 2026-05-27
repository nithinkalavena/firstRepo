import React, { useContext } from 'react'
import { context } from './A'

function I() {
  let {a,setA}=useContext(context)
  
  return (
    <div>I
      <h3>this is value from A {a}</h3>
      <button onClick={()=>setA(a+1)}>Click</button>
    </div>
  )
}

export default I
