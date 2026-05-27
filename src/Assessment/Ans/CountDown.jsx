import React, { useEffect, useState } from 'react'

function CountDown() {
    let [time,setTime] = useState(10)
    let [start,setStart] = useState(false)
    useEffect(()=>{
        let interval
        if(start && time>0){
            interval = setInterval(() => {
                setTime(time-1)
            }, 1000);
        }
        return ()=> clearInterval(interval)
    },[start,time])
  return (
    <div>
        <h1>{time}</h1>
        <button onClick={()=>setStart(true)}>Start</button>
        <button onClick={()=>setStart(false)}>Pause</button>
        <button onClick={()=>{
            setTime(10)
            setStart(false)
        }}>Reset</button>
    </div>
  )
}

export default CountDown