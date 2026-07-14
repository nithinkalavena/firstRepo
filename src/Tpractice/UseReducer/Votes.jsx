import React, { useReducer } from 'react'
let initialState = {
  votes:0
}
function reducer(state,action){
  switch(action.type){
    case 'Upvote':
      return {votes:state.votes+1}
    case 'Downvote':
      return {votes:state.votes-1}
    case 'Reset':
      return {votes:0}
  }
}
function Votes() {
  let [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <h2>Votes: {state.votes}</h2>
      <button onClick={()=>dispatch({type:'Upvote'})}>Upvote</button>
      <button onClick={()=>dispatch({type:'Downvote'})}>Downvote</button>
      <button onClick={()=>dispatch({type:'Reset'})}>Reset</button>
    </div>
  )
}

export default Votes