import { createSlice } from "@reduxjs/toolkit";

let SearchSlice = createSlice({
    name:'search',
    initialState:{
        searchItem:''
    },
    reducers:{
        setSearchTerm:(state,action)=>{
            state.searchItem = action.payload
        }
    }
})
export let {setSearchTerm} = SearchSlice.actions
export default SearchSlice.reducer