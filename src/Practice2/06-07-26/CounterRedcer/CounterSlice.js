import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

let CounterSlice = createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        inc:(state)=>{
            state.count+=1
        },
        dec:(state)=>{
            state.count-=1
        },
        incByAmount:(state,action)=>{
            state.count+=action.payload
        }
    }
})

export let {inc,dec,incByAmount} = CounterSlice.actions
export default CounterSlice.reducer