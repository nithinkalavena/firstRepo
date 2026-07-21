import React, { useEffect, useState } from 'react'
import './Form.css'
function Form() {
    let [name,setName] = useState('')
    let [email,setEmail] = useState('')
    let [data,setData] = useState(null)

    let handleSubmit = (e)=>{
        e.preventDefault()
        let user = {
            name,email
        }
        setData(user)
        console.log(user)
        alert(`Registration Successfull! ${name}`)        
        setName('')
        setEmail('')
    }
  return (
    <div className="form-container">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} required placeholder='Enter name'/><br /><br />
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder='enter email'/><br /><br />
            <button type='submit'>Submit</button>
        </form>
        {
            data && (
                <div className="data-box">
                    <h3>Submitted Data</h3>
                    <p>Name: {data.name}</p>
                    <p>Email: {data.email}</p>
                </div>
            )
        }
    </div>
  )
}

export default Form