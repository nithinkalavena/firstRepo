import React, { useState } from 'react'

function todoTask() {
    let [task,setTask] = useState('')
    let [list,setList] = useState([])
    let addTask = ()=>{
        if(task.trim()==='') return
        setList([...list,task])
        setTask('')
    }
  return (
    <div>
        <h2>Todo List</h2>
        <input type="text" value={task} onChange={e=>setTask(e.target.value)} placeholder='Enter task'/>
        <button onClick={addTask}>Add</button>
        {
            list.length === 0 ?(
                <p>No tasks</p>
            ):(
                <ul>
                    {
                        list.map((item,index)=>(
                            <li key={index} style={{listStyleType:'none'}}>{item}</li>
                        ))
                    }
                </ul>
            ) 
        }
    </div>
  )
}

export default todoTask