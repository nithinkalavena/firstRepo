import React, { useState } from 'react'

function Child({value}) {
    let [input,setInput] = useState('')    
    console.log('child re-rendered')
  return (
    <div>
        <br /><br />
        <input type="text" placeholder='Add task' value={input} onChange={(e)=>setInput(e.target.value)}/>
         &nbsp;
        <button onClick={()=>{
            value(input)
            setInput('')
        }}>Add</button>
    </div>
  )
}

export default React.memo(Child)