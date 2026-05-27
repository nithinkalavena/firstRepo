import React, { useState } from 'react'
import B from './B'

const A = React.memo(() => {
    let [a,setA]=useState(10)
    console.log('A component')
  return (
    <div>
        <h3>A component</h3>
        <button onClick={()=>setA(a+1)}>Click</button>
        <br />{a}
        <B value={a}/>
    </div>
  )
})

export default A