import React, { useState } from 'react'

function ShowMoreLess() {
    let [show,setShow] = useState(false)
    let text = 'React is a powerful javascript library used for building user interfaces. it allows developers to create reusable components'
  return (
    <div>
        <p>{show ? text:text.substring(0,50)+'...'}</p>

        <button onClick={()=>setShow(!show)}>{show ? 'Show Less':'Show More'}</button>
    </div>
  ) 
}

export default ShowMoreLess