import React from 'react'
import useTheme from './useTheme'

function ThemeChanger() {
    let {darkMode,toggleTheme} = useTheme()

  return (
    <div>
        <h1>{darkMode?'Dark mode':'Light mode'}</h1>
        <button onClick={toggleTheme}>Change theme</button>
    </div>
  )
}

export default ThemeChanger