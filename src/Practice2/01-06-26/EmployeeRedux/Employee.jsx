import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEmp, DeleteEmp } from './EmployeeSlice'

function Employee() {
    let employees = useSelector(state=>state.employee.employees)
    console.log(employees)
    let dispatch = useDispatch()
    let [name,setName] = useState('')
    let [department,setDepartment] = useState('')
    let [search,setSearch] = useState('')

    let add = ()=>{
        if(!name || !department) return
        dispatch(
            addEmp({id:Date.now(),
                name,
                department
            })
        )
        setName('')
        setDepartment('')
    }
    let filteredEmployee = employees.filter(emp=>emp.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
        <h2>Employee Directory</h2>
        <input type="text" placeholder='Employee Name' value={name} onChange={e=>setName(e.target.value)}/>
        <input type="text" placeholder='Department' value={department} onChange={e=>setDepartment(e.target.value)}/>
        <button onClick={add}>Add Employee</button>
        <br /><br />
        <input type="text" placeholder='Search Emplyee' value={search} onChange={e=>setSearch(e.target.value)}/>
        <ul>
            {
                filteredEmployee.map(emp=>(
                    <li key={emp.id} style={{listStyle:'none'}}>
                        {emp.name} - {emp.department} &nbsp;&nbsp;
                        <button onClick={()=>dispatch(DeleteEmp(emp.id))}>Delete</button><br /><br />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Employee