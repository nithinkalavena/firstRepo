import React, { useState } from 'react'

function OneWay() {
    let [name,setName] = useState('react')
  return (
    <div>
        <h2>{name}</h2>
        <button onClick={()=>setName('ReactJS')}>Change Name</button>
    </div>
  )
}

export default OneWay