import { createSlice } from "@reduxjs/toolkit";

let ticketSlice = createSlice({
    name:'ticket',
    initialState:{
        seats:[
            {id:1,booked:false},
            {id:2,booked:false},
            {id:3,booked:false},
            {id:4,booked:false},
            {id:5,booked:false},
        ]
    },
    reducers:{
        bookSeat:(state,action)=>{
            let seat = state.seats.find(seat=>seat.id === action.payload)
            if(seat)
                seat.booked = true
        },
        cancelSeat:(state,action)=>{
            let seat = state.seats.find(seat=>seat.id === action.payload)
            if(seat)
                seat.booked = false
        }        
    }
})
export let {bookSeat,cancelSeat} = ticketSlice.actions
export default ticketSlice.reducer