import React, { useState } from 'react'

function Checked() {
    let [isChecked,setIsChecked] = useState(false)
  return (
    <div>
        <label htmlFor="">
            <input type="checkbox" onChange={e=>setIsChecked(e.target.checked)}/>
            Accept Terms
        </label>
        <p>{isChecked ? 'Accepted':'Not Accepted'}</p>
    </div>
  )
}

export default Checked