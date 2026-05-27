import React, { useReducer } from 'react'

let intitialState = {isOn:false}

function reducer(state,action){
  switch(action.type){
    case 'toggle':
      return {isOn:!state.isOn}
      default:
        return state
  }
}
function Toggle() {
  let [state,dispatch] = useReducer(reducer,intitialState)
  return (
    <div>
      <h2>{state.isOn?'ON':'OFF'}</h2>
      <button onClick={()=>dispatch({type:'toggle'})}>Toggle</button>
    </div>
  )
}

export default Toggle