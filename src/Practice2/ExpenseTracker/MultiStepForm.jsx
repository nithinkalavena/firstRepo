import React, { useState } from 'react'

function MultiStepForm() {
    let [step,setStep] = useState(1)
    let [data,setData] = useState({
        name:'',email:'',age:''
    })
    let nextStep = ()=>{
        setStep(step+1)
    }
    let prevStep = ()=>{
        setStep(step-1)
    }
    let handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let handleSubmit = ()=>{
        alert('Form submitted')
        console.log(data)
        setStep(1)
        setData('')
    }
  return (
    <div>
        <h2>Multi Step Form</h2>
        {step===1 && (
            <div>
                <input type="text" name='name' placeholder='Enter name' value={data.name} onChange={handleChange}/>
                <br /><br />
                <button onClick={nextStep}>Next</button>                
            </div>
        )}
        {step===2 &&(
            <div>
                <input type="email" name="email" id="" placeholder='Enter email' value={data.email} onChange={handleChange}/>
                <br /><br />
                <button onClick={prevStep}>Previous</button>&nbsp;&nbsp;
                <button onClick={nextStep}>Next</button>
            </div>
        )}
        {step===3 &&(
            <div>
                <input type="number" name='age' placeholder='Enter age' value={data.age} onChange={handleChange}/>
                <br /><br />
                <button onClick={prevStep}>Previous</button>&nbsp;&nbsp;
                <button onClick={handleSubmit}>Submit</button>
            </div>
        )}
    </div>
  )
}

export default MultiStepForm