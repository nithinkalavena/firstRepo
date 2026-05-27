import React, { useReducer } from 'react'

let initialState=0
function reducer(state,action){
    switch(action.type){
        case 'inc':
            return state+1
        case 'dec':
            return state-1
        case 'reset':
            return 0
        case 'mult':
            return state * 2
        default:
            return state
    }
}
function Counter() {
    let [a,b]=useReducer(reducer,initialState)
  return (
    <div>
        <h3>{a}</h3>
        <button onClick={()=>b({type:'inc'})}>inc</button>
        <button onClick={()=>b({type:'dec'})}>Dec</button>        
        <button onClick={()=>b({type:'reset'})}>Reset</button>
        <button onClick={()=>b({type:'mult'})}>Multi</button>
    </div>
  )
}

export default Counter