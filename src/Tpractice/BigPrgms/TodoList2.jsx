import React, { useState } from 'react'
import {FaEdit,FaTrash} from 'react-icons/fa'

function TodoList2() {
    let [task,setTask] = useState([])
    let [input,setInput] = useState('')
    let [editIndex,setEditIndex] = useState(null)

    let handleSubmit = ()=>{
        if(input.trim()==='') return
        if (editIndex !== null) {
            let updated = [...task]
            updated[editIndex] = input
            setTask(updated)
            setEditIndex(null)
        }
        else{
            setTask(prev=>[...prev,input])
        }
        setInput('')
    }

    let handleDelete = (index)=>{
        let filtered = task.filter((_,i)=>i !== index)
        setTask(filtered)
    }

    let handleEdit = (index)=>{
        setInput(task[index])
        setEditIndex(index)
    }

    let handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }
  return (
    <div id='main'><center id='tasks'>
        <h4>Todo List </h4>
        <div style={{marginTop:'-30px'}}>            
            <input 
            type="text"
            value={input} 
            onChange={e=>setInput(e.target.value)}
            onKeyDown={handleKeyDown} id='one'/>&nbsp;&nbsp;&nbsp;

            <button onClick={handleSubmit}>{editIndex!==null?'Update':'Add'}</button><br /><br />          
        </div>
        <div>
            {
                task.map((data,index)=>(
                    <div key={index} id='spa'>
                    <span style={{marginTop:'10px'}}>{data}</span> &nbsp;&nbsp;&nbsp;
                    <FaEdit onClick={()=>handleEdit(index)}/>&nbsp;&nbsp;&nbsp;  
                    <FaTrash onClick={()=>handleDelete(index)}/>
                    </div>                
                ))
            }
       </div></center>
    </div>
  )
}

export default TodoList2