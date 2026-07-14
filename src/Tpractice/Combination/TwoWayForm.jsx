import React, { useState } from 'react'

function TwoWayForm() {
    let [form,setForm] = useState({
        name:'',email:''
    })
    let [error,setError] = useState('')
    let handleChange = (e)=>{
        setForm({
            ...form,[e.target.name]:e.target.value
        })
    }
    let handleSubmit = (e)=>{
        e.preventDefault()
        if(!form.name || !form.email)
            setError('All fields are required')
        else{  
            setError('')
            alert('Form submitted')            
        }
        console.log(form)
        setForm({
            name:'',
            email:''
        })
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Name' value={form.name} 
            onChange={handleChange}/> <br /><br />
            <input type="text" name='email' placeholder='Email' value={form.email}
            onChange={handleChange}/><br /><br />
            <button type='submit'>Submit</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  )
}

export default TwoWayForm