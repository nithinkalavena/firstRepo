import React, { useState } from 'react'

function FormSubmitted() {
    let [submitted,setSubmitted] = useState(false)
  return (
    <div>
        <button onClick={()=>setSubmitted(true)}>Submit</button>
        {
            submitted ? <h2>Form submitted</h2> : <h2>Please submit the form</h2>
        }
    </div>
  )
}

export default FormSubmitted