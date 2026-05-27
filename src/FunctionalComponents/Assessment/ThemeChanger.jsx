import React, { useState } from 'react'

function ThemeChanger() {
  let [theme,setTheme] = useState('light')

  let toggleTheme=()=>{    
    if(theme==='Light')
      setTheme('Dark')
    else
      setTheme('Light')
  }

  const style = {
    backgroundColor: theme ==='Light'?'white':'black',
    color: theme === 'Light'?'black':'white'
  }
  return (
    <body style={style}>              
      <h1>{theme} Theme</h1>
      <button onClick={toggleTheme}>ChangeTheme</button>
    </body>
  )
}

export default ThemeChanger