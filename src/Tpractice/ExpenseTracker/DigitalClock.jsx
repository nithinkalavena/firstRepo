import React, { useEffect, useState } from 'react'

function DigitalClock() {
    let [time,setTime] = useState(new Date().toLocaleTimeString())
    useEffect(()=>{
        let interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
        return ()=>clearInterval(interval)
    },[])
  return (
    <div style={{textAlign:'center',marginTop:'100px'}}>
        <h1>Digital Clock</h1>
        <h2>{time}</h2>
    </div>
  )
}

export default DigitalClock