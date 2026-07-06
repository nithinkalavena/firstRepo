import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc, incByAmount } from './CounterSlice'

function Counter() {
    let count = useSelector(state=>state.counter.count)
    let dispatch = useDispatch()
    console.log(count)
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>dispatch(inc())}>Increment</button>&nbsp;
        <button onClick={()=>dispatch(dec())}>Decrement</button>&nbsp;
        <button onClick={()=>dispatch(incByAmount(5))}>Add 5</button>
    </div>
  )
}

export default Counter