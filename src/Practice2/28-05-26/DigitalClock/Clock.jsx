import React, { useEffect, useState } from 'react'

function Clock() {
    let [time,setTime] = useState('')
    useEffect(()=>{
        let timer = setInterval(() => {
            let currentTime = new Date().toLocaleTimeString()
            setTime(currentTime)
        }, 1000);
        return ()=> clearInterval(timer)
    },[])
  return (
    <div>
        <h1>{time}</h1>
    </div>
  )
}

export default Clock