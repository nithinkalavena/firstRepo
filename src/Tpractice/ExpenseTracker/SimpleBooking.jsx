import React, { useState } from 'react'

function SimpleBooking() {
    let [name,setName] = useState('')
    let [email,setEmail] = useState('')
    let [success,setSuccess] = useState(false)
    let handleSubmit = (e)=>{
        e.preventDefault()
        if(name === '' || email ===''){
            alert('please fill all fields')
            return
        }
        setSuccess(true)
        setName('')
        setEmail('')
    }
  return (
    <div style={{padding:'20px'}}>
        <h2>Booking Form</h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Name..' value={name} onChange={e=>setName(e.target.value)}/>
            <br /><br />
            <input type="text" placeholder='Enter Email..' value={email} onChange={e=>setEmail(e.target.value)}/>
            <br /><br />    
            <button type='submit'>Book now</button>
        </form>
        {success && <h3>Booking Successful</h3>}
    </div>
  )
}

export default SimpleBooking