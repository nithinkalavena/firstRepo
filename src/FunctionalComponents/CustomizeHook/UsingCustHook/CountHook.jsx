import React from 'react'
import useCounter from '../useCounter'

function CountHook() {
    const [count,increment,decrement] = useCounter()
  return(
    <div>
        <h2>count: {count}</h2>
        <button onClick={increment}>Inc</button>&nbsp;&nbsp;
        <button onClick={decrement}>Dec</button>
    </div>
  )
}

export default CountHook