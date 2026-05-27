import React from 'react'

function HR({handleLogout}) {
  return (
    <div>HR <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default HR