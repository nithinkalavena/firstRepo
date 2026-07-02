import React, { useState } from 'react'

function CustomHook() {
    let [count,setCount] = useState(0)
  return {count,increment: ()=>setCount(count+1)}
}

export default CustomHook 