import React, { useState } from 'react'

function FormSubmission() {
    let [name,setName] = useState('')
    let [email,setEmail] = useState('')

    let handleSubmit = (e)=>{
        e.preventDefault()
        console.log(`Name: ${name}`)
        console.log(`Email: ${email}`)
        setName('')
        setEmail('')
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name : </label>
        <input type="text" placeholder='Enter name' value={name} onChange={e=>setName(e.target.value)}/> <br /><br />
        <label htmlFor="">Email : </label>
        <input type="email" placeholder='Enter email' value={email} onChange={e=>setEmail(e.target.value)}/> <br /><br />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default FormSubmission