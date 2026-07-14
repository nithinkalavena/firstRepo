import React from 'react'
import useInput from './useInput'

function Inputing() {
    let {value,handleChange,clear} = useInput('')
  return (
    <div>
        <input type="text" value={value} onChange={handleChange} placeholder='Enter name'/>
        <h2>{value}</h2>&nbsp;&nbsp;
        <button onClick={clear}>Clear</button>
    </div>
  )
}

export default Inputing