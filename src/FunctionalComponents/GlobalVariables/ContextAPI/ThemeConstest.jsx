import React, {  createContext, useEffect, useState } from "react";
import themeUser from "./themeUser";

export const context = createContext()

function themeContex(){
    const [theme,setTheme] = useState(localStorage.getItem('theme')||'light')

    useEffect(()=>{
        localStorage.setItem('theme',theme)
    },[theme])

    const toggletheme=()=>{
        setTheme(theme==='light'?'dark':'light')
    }
    return(
        <div>
            <context.Provider value={{theme,toggletheme}}>
                <themeUser />
            </context.Provider>
        </div>
    )
}