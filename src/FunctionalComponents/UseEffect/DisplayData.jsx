import React, { useState } from 'react'

function DisplayData() {
    let [name,setName] = useState('')
    let [email,setEmail] = useState('')
    
    let [submittedData,setSubmittedData] = useState([])

    let handleSubmit = (e)=>{
        e.preventDefault()        
        if(name.trim()!=='' && email.trim()!==''){
            setSubmittedData([...submittedData,{name,email}])
        setName('')
        setEmail('')
        }
        else
            alert('Please enter valid crendentials')   
        console.log(submittedData)
    }
  return (
    <div>
        <center>
        <h1>DisplayData</h1>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Name' value={name} onChange={e=>setName(e.target.value)}/><br /><br />
        <input type="email" placeholder='Enter Email' value={email} onChange={e=>setEmail(e.target.value)}/><br /><br />
        <button type='submit'>Display Data</button></form>
        <div>
            {
                submittedData.length>0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>                            
                        </thead>
                        <tbody>
                            {
                                submittedData.map((user,index)=>(
                                    <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
        </center>
    </div>
  )
}

export default DisplayData