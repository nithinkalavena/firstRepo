import { configureStore } from "@reduxjs/toolkit";
import countReducer from './Reducer'

let store = configureStore({
    reducer:{
        count:countReducer
    }
})

export default store