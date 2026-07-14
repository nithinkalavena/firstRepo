import React, { useState } from 'react'
import B from './B'

function A() {
    // Avoid prop drilling: by using context api to share data globally without passing props manually.
    // for larger apps, we use state management libraries like redux.
    let [a,setA] = useState(10)
    let inc = ()=>{
        setA(a+1)
    }
  return (
    <div>A <br />
        <button onClick={inc}>Click</button>
        <B value = {a}/>
    </div>
  )
}

export default A