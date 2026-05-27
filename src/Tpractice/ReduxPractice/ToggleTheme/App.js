import { createStore } from "redux"

let initialState = {
    theme:'light'
}

function themeReducer(state = initialState, action){
    switch(action.type){
        case 'ToggleTheme':
            return{
                theme:state.theme==='light'?'dark':'light'
            }
            default:
                return state
    }
}

export let store = createStore(themeReducer)