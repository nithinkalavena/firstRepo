import { configureStore } from "@reduxjs/toolkit";
import TicketSlice from './TicketSlice'

let store = configureStore({
    reducer:{
        ticket:TicketSlice
    }
})
export default store