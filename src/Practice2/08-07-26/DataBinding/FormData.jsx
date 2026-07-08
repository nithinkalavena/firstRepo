import React, { useState } from 'react'

function FormData() {
    let [name,setName] = useState('')
    let [email,setEmail] = useState('')
    let [user,setUser] = useState(null)

    let handleSubmit = (e)=>{
        e.preventDefault()
        if(name.trim()==='' || email.trim()==='') return
        setUser({
            name:name,
            email:email
        })        
        setName('')
        setEmail('')
    }
    console.log(user)
    let handleClear = ()=>{
        setName('')
        setEmail('')
        setUser(null)
    }
    let styles = {
        backgroundColor:'lightgrey',
        border:'2px solid black',
        borderRadius:'5px',
        padding:'20px',
        textAlign:'center',                
    }
  return (
    <div>
        <h2>Registration Form</h2>
        <form action="" onSubmit={handleSubmit} style={styles}>
            <input type="text" name='name' placeholder='Enter name' value={name} onChange={e=>setName(e.target.value)}/>
            <br /><br />
            <input type="email" name='email' placeholder='Enter email' value={email} onChange={e=>setEmail(e.target.value)}/>
            <br /><br />
            <button type='submit'>Submit</button>&nbsp;&nbsp;&nbsp;
            <button onClick={handleClear} type='button'>Clear</button>
        </form>
        <br /><br />
        {
            user && (
                <div style={styles}>
                    <h3>Submitted Details</h3>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            )
        }
    </div>
  )
}

export default FormData