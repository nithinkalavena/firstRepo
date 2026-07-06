import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ThemeApp() {
    let theme = useSelector(state=>state.theme)
    console.log(theme)
    let dispatch = useDispatch()
    let styles = {
        backgroundColor: theme === 'light'?'white':'black',
        color:theme === 'light'?'black':'white',
        minHeight:'100vh',
        padding:'20px'
    }
  return (
    <div style={styles}>
        <h1>Current theme: {theme}</h1>
        <button onClick={()=>dispatch({type:'toggle'})}>Toggle Theme</button>
    </div>
  )
}

export default ThemeApp