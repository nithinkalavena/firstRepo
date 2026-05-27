import React, { useState } from 'react'

function Booking() {
    let [form,setForm] = useState({
        name:'',
        email:'',
        date:''
    })
    let [message,setMessage] = useState('')

    let handleChange = (e)=>{
        setForm({
            ...form,[e.target.name]:e.target.value
        })
    }
    let handleSubmit = (e)=>{
        e.preventDefault()
        if(form.name===''||form.email===''||form.date===''){
            alert('please fill all fields')
            return
        }
        setMessage('Booking successfull')
        setForm({
            name:'',
            email:'',
            date:''
        })
    }
  return (
    <div>
        <h1>Booking Form</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="name" id="" placeholder='enter name' value={form.name} onChange={handleChange}/><br /> <br />
            <input type="email" name='email' placeholder='abc@gmail.com' value={form.email} onChange={handleChange}/><br /> <br />
            <input type="date"  name='date' value={form.date} onChange={handleChange}/><br /> <br />
            <button type='Submit'>Book now</button>
        </form>
        <h3>{message}</h3>
    </div>
  )
}

export default Booking