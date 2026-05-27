import { createStore } from "redux"

let reducer = (state = {toDo:[]},
    action)=>{
        if(action.type === 'ADD'){
            return{
                toDo:[...state.toDo,action.payload]
        }}
        if(action.type == 'DELETE'){
            return{
                toDo: state.toDo.filter((t,i)=> i !== action.payload)
            }
        }
        return state
    }
export let store = createStore(reducer)