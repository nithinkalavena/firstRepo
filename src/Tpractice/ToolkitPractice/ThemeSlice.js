import { createSlice } from "@reduxjs/toolkit";

let themeSlice = createSlice({
    name:'theme',
    initialState:{
        darkMode:false
    },
    reducers:{
        toggleTheme:(state)=>{
            state.darkMode = !state.darkMode
        }
    }
})
export let {toggleTheme} = themeSlice.actions
export default themeSlice.reducer