import React, { useState } from 'react'

function Counter() {
    let [count,setCount] = useState(0) 
    console.log(useState)   
  return (
    <div>
        {/* State is managed inside a single component using hooks like useState */}
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        {/* used when:
        data belongs to only one component
        simple UI interactions like toggle, counter, input value */}        
    </div>
  )
}

export default Counter