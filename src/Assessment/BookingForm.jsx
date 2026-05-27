import React, { use, useState } from 'react'

function BookingForm() {
    let [name,setName]=useState('')
    let [email,setEmail] = useState('')
    let [password,setPassword]=useState('')
    let [data,setData] = useState([])
    let handleSubmit = (e)=>{
        e.preventDefault()        
        setData({name,email,password}) 
        setEmail('')
        setName('')
        setPassword('')
        alert('Data Submitted Successfully...')
    }
    console.log(data)
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <table><tbody>
            <tr>
                <td>Name</td>
                <td>:</td>
                <td>                    
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>                
                </td>
            </tr>
            <tr>
                <td>Email</td>
                <td>:</td>
                <td><input type="text" value={email} onChange={e=>setEmail(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Password</td>
                <td>:</td>
                <td><input type="password" value={password} onChange={e=>setPassword(e.target.value)}/></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td><button type='submit'>Submit</button></td>
            </tr></tbody>
        </table></form>
    </div>    
  )
}

export default BookingForm