import React from 'react'
import { HiH2 } from 'react-icons/hi2'

function UsingAndOperatior() {
    let showMessage = true
  return (
    <div>
        {/* best when we want to show something only if condition is true */}
        {showMessage && <h2>Hello User</h2> }
    </div>
  )
}

export default UsingAndOperatior