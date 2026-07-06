import React from 'react'
import Parent from './Parent'

function GrandParent() {
    let username = 'John'
    console.log('GrandParent having the data(username) and passing through children components')
  return (
    <div>
        <h1>Prop Drilling Example</h1>
        <Parent username={username}/>
    </div>
  )
}

export default GrandParent