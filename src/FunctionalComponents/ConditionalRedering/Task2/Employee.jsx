import React from 'react'

function Employee({handleLogout}) {
  return (
    <div>Employee <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Employee