import React, { useEffect, useState } from 'react'

function useStopwatch() {
    let [time,setTime] = useState(0)
    let [running,setRunning] = useState(false)
    useEffect(()=>{
        let timer 
        if(running){
            timer = setInterval(() => {
                setTime(prev=>prev+1)
            }, 1000);
        }
        return ()=>{
            clearInterval(timer)
        }
    },[running])
  return {time,running,start:()=>setRunning(true),stop:()=>setRunning(false),
            reset:()=>{setRunning(false),setTime(0)}
        }
}

export default useStopwatch