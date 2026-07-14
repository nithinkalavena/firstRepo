import React from 'react'
import useWindowWidth from './useWindowWidth'

function WindowWidth() {
    let width = useWindowWidth()
  return (
    <div>
        <h2>Window width: {width}px</h2>
    </div>
  )
}

export default WindowWidth