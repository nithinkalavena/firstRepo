import React, { useState } from 'react'
import Props2 from './Props2'

function Props() {
    let [a,setA] = useState(10)
    let inc = ()=>{
        setA(a+1)
    }
  return (
    <div>
        <Props2 value={{a,inc}}/>
    </div>
  )
}

export default Props