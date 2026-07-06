import React, { useState } from 'react'

function InputBox({text,setText}){
    return(
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}
        placeholder='Type something'/>
    )
}
function Display({text}){
    return <h2>{text}</h2>
}
function LiftUp() {
    let [text,setText] = useState('')
  return (
    <div>
        <InputBox text={text} setText={setText}/>
        <Display text={text}/>
    </div>
  )
}

export default LiftUp