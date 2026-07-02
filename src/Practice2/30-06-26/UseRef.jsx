import React, { useRef } from 'react'

function UseRef() {
    let inputRef = useRef()    
    let focusInput = ()=>{
        console.log(inputRef.current)
    }
  return (
    <div>
        UseRef: stores a value without causing a re-render and is commonly used to access
        DOM elements.
        <input ref={inputRef}/>
        <button onClick={focusInput}>Focus</button>
    </div>
  )
}

export default UseRef