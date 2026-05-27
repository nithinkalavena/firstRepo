import { createStore } from "redux"

let initialState = {
    users:[],
    loading:false,
    error:null
}

function ApiReducer(state = initialState, action){
    switch(action.type){
        case 'fetchStart':
            return{
                ...state,loading:true,error:null
            }
        case 'fetchSuccess':
            return{
                users:action.payload,loading:false,error:null
            }
        case 'fetchFail':
            return{
                ...state,loading:false,error:'something went wrong'
            }
        case 'deleteUser':
            return {
                ...state,users:state.users.filter((u)=>u.id!==action.payload)
            }
        default:
            return state
    }
}

export let store = createStore(ApiReducer)