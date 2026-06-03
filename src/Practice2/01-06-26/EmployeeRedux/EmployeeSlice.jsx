import { createSlice } from "@reduxjs/toolkit";

let EmployeeSlice = createSlice({
    name:'employee',
    initialState:{
        employees:[
        {id:1,name:'John',department:'HR'},
        {id:2,name:'David',department:'IT'},
    ]},
    reducers:{
        addEmp:(state,action)=>{
            state.employees.push(action.payload)
        },
        DeleteEmp:(state,action)=>{
            state.employees = state.employees.filter(emp=>emp.id !== action.payload)
        }
    }
})
export let {addEmp,DeleteEmp} = EmployeeSlice.actions
export default EmployeeSlice.reducer