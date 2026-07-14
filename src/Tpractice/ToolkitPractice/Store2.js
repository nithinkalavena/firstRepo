import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './ThemeSlice'
let store = configureStore({
    reducer:{
        theme:themeReducer
    }
})
export default store