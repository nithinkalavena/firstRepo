import React, { createContext, useContext, useState } from 'react'

let themeContext = createContext()

function Header(){
    let {theme} = useContext(themeContext)

    let styles = {
    padding:'20px',
    borderRadius:'10px',
    backgroundColor:theme ==='light'?'#dbeafe':'#1e3a8a',
    color:theme==='light'?'#1e3a8a':'#ffffff',
    border:theme==='light'?'2px solid #93c5fd':'2px solid #60a5fa'
    }

    console.log(theme)
    return <div style={styles}>Theme is {theme}</div>
}

function ThemeChanger() {
    let [theme,setTheme] = useState('Light')
  return (
    <themeContext.Provider value={{theme,setTheme}}>
        <Header/>
        <button onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}
            style={{
                marginTop:'15px',
                padding:'10px 20px',
                border:'none',
                borderRadius:'6px',
                cursor:'pointer',
                backgroundColor:'#2563eb',
                color:'#fff'
            }}>Toggle Theme</button>
    </themeContext.Provider>
  )
}

export default ThemeChanger