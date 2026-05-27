import React, { useState } from 'react'
import usePrevious from './usePrevious'

function usePrevious1() {
    let [count,setCount] = useState(0)
    let prevCount = usePrevious(count)
  return (
    <div>
        <h2>Current : {count}</h2>
        <h3>Previous : {prevCount}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default usePrevious1