import React, { use, useState } from 'react'

function ControlledForm() {
    let [name,setName]=useState('')
    let [email,setEmail] = useState('')
    let [passsword,setPassword] = useState('')

    let [data,setData]=useState([])

    let handleSubmit=(e)=>{
      e.preventDefault()
      if(name.trim()!==''&&email.trim()!==''&&passsword.trim()!==''){
        setData([...data,{name,email,passsword}])    
        setName('')
        setEmail('')
        setPassword('')
      }
      else{
        alert('Please enter the credentials')
      }
    }

  return (
    <div>
      
      <form action="" onSubmit={handleSubmit}>
        <table>
          <thead>
          <tr>
            <td>
        <label htmlFor="">Name</label>&nbsp;&nbsp;&nbsp;</td><td>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> <br /></td></tr>
        <tr>
          <td>
        <label htmlFor="">Email</label>&nbsp;&nbsp;&nbsp;</td><td>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br /></td></tr>
        <tr>
          <td>
        <label htmlFor="">Password</label>&nbsp;&nbsp;&nbsp;</td><td>
        <input type="password" value={passsword} onChange={(e)=>setPassword(e.target.value)}/> <br /></td></tr>
        <tr>
          <td></td>
          <td><br />
        <button type='submit'>Submit</button></td></tr></thead></table>
        </form>  <br /><hr /><br />      
        {
          data.length>0&&(
            <table>
              <thead><tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th></tr>
              </thead>
              <tbody>
                {
                  data.map((user,index)=>(
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.passsword}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          )
        }        
    </div>
  )
}

export default ControlledForm