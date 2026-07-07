import React from 'react'

function ButtonClick() {
    let handleClick = ()=>{
        console.log('Button clicked')
    }
  return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default ButtonClick