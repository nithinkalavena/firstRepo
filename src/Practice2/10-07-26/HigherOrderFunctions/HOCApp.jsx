import React from 'react'

function HOCApp() {
    let students = ['Nithin','ravi','kiran']
  return (
    <div>
        <h2>Student List</h2>
        {
            students.map((students,index)=>(
                <p key={index}>{students}</p>
            ))
        }
    </div>
  )
}

export default HOCApp