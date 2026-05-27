import React, { useReducer, useState } from 'react'
let initialState = []
function reducer(state,action){
    switch(action.type){
        case 'Add':
            return [...state,{id:Date.now(),text:action.payload, completed:false}]
        case 'Delete':
            return state.filter(task=>task.id !== action.payload)
        case 'Toggle':
            return state.map(task=>task.id === action.payload ? {...task,completed: !task.completed}:task)
        default:
            return state
    }
}
function Todo() {
    let [tasks,dispatch] = useReducer(reducer,initialState)
    let [input,setInput] = useState('')
    function addTask(){
        if(!input.trim())return
        dispatch({
            type:'Add',
            payload:input
        })
        setInput('')
    }    
  return (
    <div>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>&nbsp;&nbsp;
        <button onClick={addTask}>Add</button><br /><br />
        {
            tasks.map(task=>(
                <div key={task.id}>
                    <span onClick={()=>{
                        dispatch({
                            type:'Toggle',
                            payload:task.id
                        })
                    }}
                    style={{
                        textDecoration:task.completed?'line-through':'none'
                    }}>{task.text}</span>&nbsp;&nbsp;
                    <button onClick={()=>dispatch({
                        type:'Delete',
                        payload:task.id
                    })}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default Todo