import React from 'react'

function FilterHOC() {
    let students = [
        {id:1, name:'Nithin',passed:true},
        {id:2, name:'Ravi',passed:false},
        {id:3, name:'kiran',passed:true}
    ]
    let passStudents = students.filter(student=>student.passed)
  return (
    <div>
        <h2>Passed Students</h2>
        {
            passStudents.map(student=>(
                <p key={student.id}>{student.name}</p>
            ))
        }
    </div>
  )
}

export default FilterHOC