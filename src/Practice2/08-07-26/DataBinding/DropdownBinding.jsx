import React, { useState } from 'react'

function DropdownBinding() {
    let [city,setCity] = useState('')
  return (
    <div>
        <h2>Select city</h2>
        <select name="" id="" value={city} onChange={e=>setCity(e.target.value)}>
            <option value="">-select city</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Chennai">Chennai</option>
        </select>
        <p>Selected City: {city}</p>
    </div>
  )
}

export default DropdownBinding