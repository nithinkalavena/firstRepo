import { createStore } from "redux"

let initialState = {
    users:[],
    loading:false,
    error:null
}

function APiReducer(state = initialState, action){
    switch(action.type){
        case 'fetchStart':
            return {
                ...state,loading:true,error:null
            }        
        case 'fetchSuccess':
            return{
                users:action.payload,loading:false,error:null
            }
        case 'fetchError':
            return{
                ...state,loading:false,error:'something went wrong'
            }
        default:
            return state
    }
}

export let store = createStore(APiReducer)