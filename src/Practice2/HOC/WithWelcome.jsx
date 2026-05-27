import React from 'react'
function Student(){
    return <h2>Student</h2>
}
function Teacher(){
    return <h2>Teacher</h2>
}
function Welcome(Component){
        return function(){
            return(
            <div style={{border:'2px solid black'}}>
            <h1>Welcome</h1>
            <Component/>
        </div>
        )}
}
let StudentComp = Welcome(Student)
let TeacherComp = Welcome(Teacher)
function WithWelcome() {
  return (
    <div>  
        <StudentComp/>     
        <TeacherComp/>
    </div>
  )
}

export default WithWelcome