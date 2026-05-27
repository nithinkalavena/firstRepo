import React, { useState } from 'react'
import D from './D'

function B() {
  let [a,setA]=useState({
    name:'Mounika',
    city:'Vjy'
  })

  let set = ()=>{
    setA({...a,city:'hyderabad'})
  }

  console.log(a)
  return (
    <div>B
      <h4>{a.city}</h4>
      <button onClick={set}>Click</button>
      <D/>
    </div>
  )
}

export default B
