import React, { useState } from 'react'

function DisplayData() {
    let [form,setForm] = useState({
        name:'',
        email:'',
        password:''        
    })
    let [data,setData] = useState(null)
    let handlechange = (e)=>{
        setForm({
            ...form,[e.target.name]:e.target.value
        })
    }
    let handlesub = (e)=>{
        e.preventDefault()
        setData(form)
    }
  return (
    <div>
        <input type="text" name='name' onChange={handlechange} value={form.name} />
        <input type="text" name='email' onChange={handlechange} value={form.email}/>
        <input type="password" name='password' onChange={handlechange} value={form.password}/>
        <button onClick={handlesub}>Click</button>
        {
            data && (
                <li>
                    <p>Name:{data.name}</p>
                    <p>Email:{data.email}</p>
                    <p>Password:{data.password}</p>
                </li>
            )
        }
    </div>
  )
}

export default DisplayData