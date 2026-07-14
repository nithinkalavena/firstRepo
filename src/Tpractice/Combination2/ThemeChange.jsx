import React, { useState } from 'react'

function ThemeChange() {
    let [dark,setDark] = useState(false)
    let style = {
        background:dark?'black':'white',
        color:dark?'white':'black',
        height:'100vh',
        padding:'20px',
        borderRadius:'10px'
    }
  return (
    <div style={style}>
        <h2>{dark?'Dark Mode':'Light Mode'}</h2>
        <button onClick={()=>setDark(!dark)}>Toggle Theme</button>
    </div>
  )
}

export default ThemeChange