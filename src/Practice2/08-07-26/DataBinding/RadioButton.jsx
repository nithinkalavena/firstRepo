import React, { useState } from 'react'

function RadioButton() {
    let [gender,setGender] = useState('')
  return (
    <div>
        <h2>Radio Button Example</h2>
        <label htmlFor="">
            <input type="radio" name='gender' value='Male' checked={gender === 'Male'} onChange={e=>setGender(e.target.value)}/>
            Male
        </label>
        <label htmlFor="">
            <input type="radio" name="gender" value='Female' checked={gender === 'Female'} onChange={e=>setGender(e.target.value)}/>
            Female
        </label>
        <br /><br />
        <p>Selected Gender: {gender}</p>
    </div>
  )
}

export default RadioButton