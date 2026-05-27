import {createSlice} from '@reduxjs/toolkit'

let slice = createSlice({
    name:'count',
    initialState:{value:10},
    reducers:{
        Inc:(state)=>{
            state.value++
        },
        Dec:(state)=>{
            state.value--
        }
    }
}) 

export const {Inc,Dec} = slice.actions
export default slice.reducer