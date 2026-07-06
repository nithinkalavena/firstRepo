import React from 'react'
import Parent from './Parent'
import userContext from './UserContext'
function Mother() {
    let username = 'Nithin'
  return (
    <div>
        <h1>Context API Example</h1>
        <userContext.Provider value={username}>
            <Parent/>
        </userContext.Provider>
    </div>
  )
}

export default Mother