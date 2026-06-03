import React, { useContext } from 'react'
import { context } from './Parent'

function GrandChild() {
    let {count,setCount} = useContext(context)
  return (
    <div>
        <h3>Cart Items: {count}</h3>
        <button onClick={()=>setCount(count+1)}>Add to cart</button>&nbsp;&nbsp;
        <button onClick={()=>setCount(count-1)}>Remove Item</button>
    </div>
  )
}

export default GrandChild