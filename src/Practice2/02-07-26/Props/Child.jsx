import React from 'react'

function Child({sendMessage}) {
    console.log(sendMessage)
  return (
    <div>
        <button onClick={sendMessage}>Click me</button>
    </div>
  )
}

export default Child