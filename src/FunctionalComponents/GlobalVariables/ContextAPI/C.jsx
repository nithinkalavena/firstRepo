import React, { useState } from 'react'
import E from './E'
import F from './F'

function C() {
  let [name,setName]=useState({
    name:'Nithi'
  })

  return (
    <div>C
      <h3>{name.name}</h3>
      <button onClick={()=>setName({name:'Kalavena Nithin'})}>Click</button>
        <E/>
        <F/>
    </div>
  )
}

export default C
