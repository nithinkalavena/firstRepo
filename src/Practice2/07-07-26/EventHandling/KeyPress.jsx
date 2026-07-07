import React from 'react'

function KeyPress() {
    let handleKeyDown = (e)=>{
        console.log('Key pressed:',e.key)
    }
  return (
    <div>
        <input type="text" onKeyDown={handleKeyDown} placeholder='Type something'/>
    </div>
  )
}

export default KeyPress