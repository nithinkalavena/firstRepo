import React from 'react'
import useCounter from './useCounter'

function Counting() {
    let {count,setCount,increment,decrement,reset} = useCounter()
    console.log(count)
  return (
    <div>
      <h1>UseCounter hook</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>&nbsp;&nbsp;
      <button onClick={decrement}>Decrement</button>&nbsp;&nbsp;
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counting