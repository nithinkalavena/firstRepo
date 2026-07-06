import React from 'react'
import GrandChild from './GrandChild'

function Child({username}) {
    console.log('in child component',username)
  return (
    <div>
        <h3>Child Component</h3>
        <GrandChild username={username}/>    
    </div>
  )
}

export default Child