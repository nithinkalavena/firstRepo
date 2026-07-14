import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from './ThemeSlice'

function ThemeComponent() {
    let darkMode = useSelector(state=>state.theme.darkMode)
    let dispatch = useDispatch()
  return (
    <div style={{
        background:darkMode?'black':'white',
        color:darkMode?'white':'black',
        height:'100vh',
        padding:'20px'
    }}>
        <h1>{darkMode?'DarkMode':'LightMode'}</h1>
        <button onClick={()=>dispatch(toggleTheme())}>Change Theme</button>
    </div>
  )
}

export default ThemeComponent