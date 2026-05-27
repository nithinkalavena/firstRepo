import React, { useContext } from 'react'
import { countContext } from './A'

function D() {
    let {count} = useContext(countContext)
  return (
    <div>
        <h1>Count: {count}</h1>
    </div>
  )
}

export default D