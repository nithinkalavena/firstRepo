import React, { useContext } from 'react'
import { context } from './ThemeConstest'

function themeUser() {
    let {theme,toggletheme}=useContext(context)
    const style = {
        backgroundColor:theme==='light'?'dark':'light'
    }
  return (
    <div style={style}>themeUser
        <button onClick={toggletheme}>Tggle</button>
    </div>
  )
}

export default themeUser