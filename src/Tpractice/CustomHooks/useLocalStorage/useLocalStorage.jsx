import React, { useEffect, useState } from 'react'

function useLocalStorage(key,initialState) {
    //Get value from localstorage 
    let [value,setValue] = useState(()=>{
        let stored = localStorage.getItem(key)
        if(stored === null || stored === 'undefined')
            return initialState
        return JSON.parse(stored)        
    })

    //update localstorage whenever value changes
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])

  return [value,setValue]
}

export default useLocalStorage