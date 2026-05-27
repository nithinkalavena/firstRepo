import React, { useState } from 'react'
import Login from './Login'
import Manager from './Manager'
import Employee from './Employee'
import HR from './HR'
import Admin from './Admin'

function Profile() {
    let [role,setRole] = useState(localStorage.getItem('role')||'')
    let [isLoggedIn,setLoggedIn] = useState(localStorage.getItem('isLoggedIn')==='true')
    
    let handleLogin=()=>{
        localStorage.setItem('role',role)
        localStorage.setItem('isLoggedIn','true')
        setLoggedIn(true)
    }

    let handleLogout=()=>{
        localStorage.removeItem('role')
        localStorage.removeItem('isLoggedIn')
        setRole('')
        setLoggedIn(false)
    }
    
    let getButtonCalss=(btnRole)=>{
        return role === btnRole ? 'active':''
    }

    if(isLoggedIn && role){
        if(role === 'Manager') return <Manager handleLogout={handleLogout}/>
        if(role === 'Employee') return <Employee handleLogout={handleLogout}/>
        if(role === 'HR') return <HR handleLogout={handleLogout}/>
        if(role === 'Admin') return <Admin handleLogout={handleLogout}/>
    }
  return (
    <div>
        <center>
            <h2>Select Your Role</h2>
            <button className={getButtonCalss('Manager')} onClick={()=>setRole('Manager')}>Manager</button>&nbsp;&nbsp;
            <button className={getButtonCalss('HR')} onClick={()=>setRole('HR')}>HR</button>&nbsp;&nbsp;
            <button className={getButtonCalss('Admin')} onClick={()=>setRole('Admin')}>Admin</button>&nbsp;&nbsp;
            <button className={getButtonCalss('Employee')} onClick={()=>setRole('Employee')}>Emp</button>

            {
                role && <Login role={role} handleLogin={handleLogin}/>
            }
        </center>
    </div>
  )
}

export default Profile