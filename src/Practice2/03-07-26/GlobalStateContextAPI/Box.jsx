import React, { createContext, useContext, useEffect, useState } from 'react'
let themeContext = createContext()
function Themer(){
    let {theme} = useContext(themeContext)
    console.log(theme)
    return(
        <div>
            Theme is {theme}
        </div>
    )
}
function Box() {
    let [theme,setTheme] = useState('light')
    useEffect(()=>{
        document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#000'
        document.body.style.color = theme === 'light' ? '#000' : '#fff'
    },[theme])
  return (
    <themeContext.Provider value={{theme,setTheme}}>
        <div>
            <Themer/>
            <hr />  
            <button onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle theme</button>
        </div>
    </themeContext.Provider>
  )
}

export default Box