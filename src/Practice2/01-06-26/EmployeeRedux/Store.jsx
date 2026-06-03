import { configureStore } from "@reduxjs/toolkit";
import EmployeeSlice from './EmployeeSlice'
let store = configureStore({
    reducer:{
        employee:EmployeeSlice
    }
})
export default store