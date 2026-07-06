import React, { useContext } from 'react'
import userContext from './UserContext'

function GrandChild() {
    let username = useContext(userContext)
  return (
    <div>
        <h2>Grandchild Component</h2>
        <p>User Name: {username}</p>
    </div>
  )
}

export default GrandChild