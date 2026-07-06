import { createStore } from "redux"

let initialState = {
    theme:'light'
}

function themeReducer(state=initialState, action){
    switch(action.type){
        case 'toggle':
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light'}
            default:
                return state
    }
}

let store = createStore(themeReducer)

export default store