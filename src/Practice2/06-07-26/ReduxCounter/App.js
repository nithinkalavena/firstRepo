import { createStore } from "redux"

let initialState = {
    count:0
}

function countReducer(state=initialState, action){
    switch(action.type){
        case "inc":
            return {
                ...state, count: state.count+1
            }
        case 'dec':
            return {
                ...state, count: state.count-1
            }
        default:
            return state
    }
}

export let store = createStore(countReducer)
export default store