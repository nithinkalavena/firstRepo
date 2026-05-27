import React, { useReducer } from 'react'

let data = {
    count:10
}
function countReducer(state,action){
    switch(action.type){
        case 'Inc':
            return{count:state.count++}
        case 'Dec':
            return{count:state.count--}
        default:
            return state
    }
}
function One() {
    let [a,setA] = useReducer(countReducer,data)
    console.log(a)
  return (
    <div>
        <h3>{a.count}</h3>
        <button onClick={()=>setA({type:'Inc'})}>Inc</button>&nbsp;&nbsp;
        <button onClick={()=>setA({type:'Dec'})}>Dec</button>&nbsp;&nbsp;
        <button onClick={()=>setA({type:'default'})}>Default</button>
    </div>
  )
}

export default One