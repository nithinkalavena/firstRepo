import React, { useEffect, useState } from 'react'

function useIdle(time) {
    let [isIdle,setIsIdle] = useState(false)
    useEffect(()=>{
        let timer
        let resetTimer = ()=>{
            clearTimeout(timer)
            setIsIdle(false)

            timer = setTimeout(() => {
                setIsIdle(true)
            }, time);
        }
        window.addEventListener('mousemove',resetTimer)
        window.addEventListener('keypress',resetTimer)
        resetTimer()
        return ()=>{
            clearTimeout(timer)
            window.removeEventListener('mousemove',resetTimer)
            window.removeEventListener('keypress',resetTimer)
        } 
    },[time])
    return isIdle
}

export default useIdle