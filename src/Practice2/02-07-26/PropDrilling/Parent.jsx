import React from 'react'
import Child from '../PropDrilling/Child'

function Parent({username}) {
    console.log('in parent component',username)
  return (
    <div>
        <h2>Parent Component</h2>
        <Child username={username}/>
    </div>
  )
}

export default Parent