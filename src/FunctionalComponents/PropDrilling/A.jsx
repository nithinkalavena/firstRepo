import React, { useState } from 'react'
import B from './B'
import C from './C'

function A() {
    let [a,setA]=useState(10)
  return (
    <div>A
        <B value={a}/>
        <C/>
    </div>
  )
}

export default A
