import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { login } from './AuthSlice'
import Dashboard from './Dashboard'

function Login() {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let dispatch = useDispatch()
    let isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
    function handleLogin(){
        if(email === 'admin@gmail.com' && password==='1234')
            dispatch(login({email}))
        else
            alert('Invalid login credentials')
    }
  return (
    <div>
        {
            !isLoggedIn ? <div> <h2>Login</h2>
            <input type="text" placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/> <br /><br />
            <input type="password" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/> <br /><br />
            <button onClick={handleLogin}>Login</button>
            </div> : <Dashboard/>
        }
    </div>
  )
}

export default Login