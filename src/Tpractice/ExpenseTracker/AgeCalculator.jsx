import React, { useState } from 'react'

function AgeCalculator() {
    let [dob,setDob] = useState('')
    let [age,setAge] = useState('')

    let calculateAge= ()=>{
        let birthYear = new Date(dob).getFullYear()
        let currentYear = new Date().getFullYear()

        setAge(currentYear - birthYear)
    }
  return (
    <div style={{textAlign:'center',marginTop:'100px'}}>
        <h1>Age Calculator</h1>
        <input type="date" value={dob} onChange={e=>setDob(e.target.value)}/><br /><br />
        <button onClick={calculateAge}>Calculate Age</button>
        <h2>Your Age: {age}</h2>
    </div>
  )
}

export default AgeCalculator