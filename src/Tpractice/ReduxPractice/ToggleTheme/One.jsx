import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function One() {
    let theme = useSelector(state=>state.theme)
    console.log(theme)
    let dispatch = useDispatch()
    
    let style = {
        margin:'0px',
        height:'100vh',
        backgroundColor: theme==='light'?'#fff':'#222',
        color:theme==='light'?'#000':'#fff',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignitems:'center'
    }
  return (
    <div style={style}>
        <h1>Current Theme : {theme}</h1>
        <button onClick={()=>dispatch({type:'ToggleTheme'})}>ToggleTheme</button>
    </div>
  )
}

export default One