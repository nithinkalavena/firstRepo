import React, { useReducer } from 'react'

let initialState = {
        show:false
    }
function reducer(state){
        return{
            show:!state.show
        }
    }
function PasswordShowHide() {
    let [state,dispatch] = useReducer(reducer,initialState)
  return (    
    <div>
        <input type={state.show?'text':'password'} placeholder='Enter Password'/>&nbsp;&nbsp;
        <button onClick={()=>dispatch()}>{state.show?'Hide':'Show'}</button>
    </div>
  )
}

export default PasswordShowHide