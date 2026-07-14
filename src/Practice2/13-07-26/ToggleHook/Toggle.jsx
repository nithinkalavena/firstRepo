import React from 'react'
import useToggle from './useToggle'

function Toggle() {
    let [isOn,toggle] = useToggle()

  return (
    <div>
        <h2>{isOn ? 'Light is ON' : 'Light is OFF'}</h2>
        <button onClick={toggle}>{isOn ? 'Turn OFF' : 'Turn ON'}</button>
    </div>
  )
}

export default Toggle