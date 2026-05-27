import React, { useEffect, useRef } from 'react'

function RefFocus() {
    let inputRef = useRef()
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
        <h1>useRef Example</h1>
        <input type="text" placeholder='Type here...' ref={inputRef}/>
    </div>
  )
}

export default RefFocus