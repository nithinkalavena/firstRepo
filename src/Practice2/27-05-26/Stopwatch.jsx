import React from 'react'
import useStopwatch from './useStopwatch'

function Stopwatch() {
    let {time,start,stop,reset} = useStopwatch()
  return (
    <div>
        <h2>{time}</h2>
        <button onClick={start}>Start</button>&nbsp;&nbsp;
        <button onClick={stop}>Stop</button>&nbsp;&nbsp;
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch