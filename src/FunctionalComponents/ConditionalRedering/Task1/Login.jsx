import React from 'react'

function Login({value}) {
    // console.log(value)
    let handleSubmit = (e)=>{
        e.preventDefault()
        value()
    }
  return (
    <div>
        <h3>Login</h3>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Username : </label>
            <input type="email" name="" id=""/> <br /><br />
            <label htmlFor="">Password : </label>
            <input type="password" /> <br /><br />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login