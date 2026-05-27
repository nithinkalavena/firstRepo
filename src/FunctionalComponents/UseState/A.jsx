import React, { useState } from 'react'
import B from './B'
import C from './C'

function A() {
    let [a,setA]=useState(10)
    function hai(k){
        setA(k)
    }
  return (
    <div>
        <B value={a}/>
        <C value={hai}/>
    </div>
  )
}

export default A
