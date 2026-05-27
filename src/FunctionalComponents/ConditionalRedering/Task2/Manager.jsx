import React from 'react'

function Manager({handleLogout}) {
  return (
    <div>Manager <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Manager