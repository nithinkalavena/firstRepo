import React from 'react'

function MouseOverEvent() {
    let handleMouseOver = ()=>{
        console.log('Mouse is over the heading')
    }
  return (
    <div>
        <h1 onMouseOver={handleMouseOver}>Hover on me</h1>
    </div>
  )
}

export default MouseOverEvent