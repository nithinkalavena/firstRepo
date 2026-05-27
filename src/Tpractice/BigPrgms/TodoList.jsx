import React, { useState } from "react";

function TodoList(){
    let [task,setTask] = useState([])
    let [input,setInput] = useState('')

    let handleSubmit=(input)=>{
        if(input.trim()=='')
            alert('Please enter a task')
        setTask((prev)=>[...prev,input])
        setInput('')
    }
    return( 
        <><center>
            <h2>Enter The Todo Items</h2>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="enter task"/>&nbsp;&nbsp;&nbsp; 
            <button onClick={()=>handleSubmit(input)}>+</button>      
            {
                task.map((data,index)=>(
                    <h4 key={index}>{data}</h4>
                ))
            }</center>
        </>
    )
}

export default TodoList