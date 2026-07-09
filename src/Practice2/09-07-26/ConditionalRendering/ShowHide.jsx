import React, { useState } from 'react'

function Child(){
    return <h2>I am child component</h2>
}

function ShowHide() {
    let [show,setShow] = useState(true)
  return (
    <div>
        <button onClick={()=>setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
        {show && <Child/>}
    </div>
  )
}

export default ShowHide