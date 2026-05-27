import React, { useCallback, useState } from 'react'
import B from './B'

function A() {
    let [a,seta] = useState(11)
    console.log('parent rendered')

    let handleClick = useCallback(()=>{
        console.log('button clicked') 
    },[])
  return (
    <div>
        A {a} <br /> 
        <button onClick={()=>seta(a+1)}>Click</button> <br /> <hr />
        <B value={handleClick}/>
    </div>
  )
}

export default A