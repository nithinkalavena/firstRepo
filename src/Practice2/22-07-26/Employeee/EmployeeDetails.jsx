import React from 'react'
import { useParams } from 'react-router-dom'

function EmployeeDetails() {
    let {id} = useParams()
    console.log(useParams())
  return (
    <div>
        <h1>Employee Details</h1>

        <h2>Employee id: {id}</h2>
    </div>
  )
}

export default EmployeeDetails