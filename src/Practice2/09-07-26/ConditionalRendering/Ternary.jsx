import React from 'react'

function Ternary() {
    let isLoggedIn = false
  return (
    <div>
        {/* Best when you want to choose between two outputs */}
        {
            isLoggedIn ? <h1>Welcome Back</h1> : <h1>Please Login</h1>
        }
    </div>
  )
}

export default Ternary