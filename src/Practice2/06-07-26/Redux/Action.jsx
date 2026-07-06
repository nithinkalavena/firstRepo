import React from 'react'

function Action() {
  return (
    <div>
        An action is an object that tells redux what happened.
        Action usually contains:
        type: what operation to perform
        optional payload: extra data
        {/* {type:'addUser', payload:'Nithin'} */}
    </div>
  )
}

export default Action