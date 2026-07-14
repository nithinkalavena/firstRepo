import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function One() {
    let [text,setText] = useState('')
    let toDo = useSelector(state=>state.toDo)    
    let dispatch = useDispatch()
  return (
    <div style={{textAlign:'center'}}>
        <h2>Simple Todo</h2>
        <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
        <button onClick={()=>{
            dispatch({type:'ADD',payload:text})
            setText('')
            }}>Add</button>
        {
            toDo.map((t,i)=>(
                <div key={i} style={{display:'flex',gap:'80px',justifyContent:'center',marginTop:'10px'}}>
                    {t}
                    <button onClick={()=>dispatch({type:'DELETE',payload:i})}>X</button>
                </div>
            ))
        }
    </div>
  )
}

export default One