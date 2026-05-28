import React, { useReducer } from 'react'

function Counter() {
    
    let initialState = 0
    
    function reducer(state,action){
      switch(action.type){
        case 'inc':
          return state+1
        case 'dec':
          return state-1
        case 'reset':
          return 0
        case 'multi':
          return state*2
        default:
          return state;
      }
    }
  return (
    div
  )
}

export default Counter