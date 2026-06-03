import React, { createContext, useState } from 'react'
import Child from './Child'
export let context = createContext()
function Parent() {
    let [count,setCount] = useState(0)
  return (
    <context.Provider value={{count,setCount}}>
        <h2>Shopping Cart</h2>
        <Child/>   
    </context.Provider> 
  )
}

export default Parent