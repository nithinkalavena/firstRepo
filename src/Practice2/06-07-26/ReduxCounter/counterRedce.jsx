import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function counterRedce() {
    let count = useSelector(state=>state.count)
    console.log(count)
    let dispatch = useDispatch()
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>dispatch({type:'inc'})}>Increment</button>&nbsp;&nbsp;
        <button onClick={()=>dispatch({type:'dec'})}>Decrement</button>
    </div>
  )
}

export default counterRedce