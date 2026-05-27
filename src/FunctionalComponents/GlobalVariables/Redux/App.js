import {createStore} from 'redux'

let initialState={
    sum:1000
}

function reducer(state=initialState,Actions){
    switch(Actions.type){
        case 'a': 
            return {
                ...state,state:state.sum+1
        }
        case 'b':
            return{
                ...state,state:state.sum-1
        }
        default:
            return state
    }
}

export let store = createStore(reducer)