import React, { useEffect, useState } from 'react'

function useTheme() {
    let [darkMode,setDarkMode] = useState(()=>{return localStorage.getItem('theme')==='dark'})

    useEffect(()=>{
        if(darkMode){
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white'
            localStorage.setItem('theme','dark')
        }
        else{
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
            localStorage.setItem('theme','light')
        }
    },[darkMode])

    function toggleTheme(){
        setDarkMode(prev=>!prev)
    }
  return {darkMode,toggleTheme}
}

export default useTheme