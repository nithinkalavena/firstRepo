import React from 'react'
import useIdle from './useIdle'

function isIdle() {
    let isIdle = useIdle(2000)
  return (
    <div>
        <h2>{isIdle?'User is Inactive':'User is active'}</h2>
    </div>
  )
}

export default isIdle