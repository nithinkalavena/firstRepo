import React from 'react'

function Admin({handleLogout}) {
  return (
    <div>Admin <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Admin