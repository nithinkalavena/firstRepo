import React from 'react'

function GrandChild({username}) {
    console.log('finally in grand child component',username)
  return (
    <div>
        <h4>GrandChild Component</h4>
        <p>User Name: {username}</p>
    </div>
  )
}

export default GrandChild