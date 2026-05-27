import React, { useReducer, useState } from 'react'
let initialState = {text:''}

function reducer(state,action){
    switch(action.type){
        case 'setText':
            return{text:action.payload}
        case 'clear':
            return{text:''}
        default:
            return state
    }
}
function InputField() {
    let [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <input type="text" value={state.text} onChange={(e)=>
            dispatch({type:'setText',payload:e.target.value})}/> &nbsp;&nbsp;&nbsp;
        <button onClick={()=>dispatch({type:'clear'})}>Clear</button>
        <h2>{state.text}</h2>
    </div>
  )
}

export default InputField