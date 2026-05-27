import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Dec, Inc } from './Reducer'

function One() {
    let d = useSelector(state=>state.count.value)
    let dd = useDispatch()
  return (
    <div>One
        <h5>{d}</h5>
        <button onClick={()=>dd(Inc())}>Inc</button>
        <button onClick={()=>dd(Dec())}>Dec</button>
    </div>
  )
}

export default One