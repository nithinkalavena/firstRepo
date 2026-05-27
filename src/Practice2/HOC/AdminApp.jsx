import React, { useState } from 'react'
function AdminPanel(){
    return <h2>Admin settings</h2>
}
function UserProfile(){
    return <h2>User Profile</h2>
}
function withPermission(Component){
    return function({role}){
        if(role !== 'admin')
            return <h2>Access Denied</h2>
        return <Component/>
    }    
}
let ProtectedAdmin = withPermission(AdminPanel)
function AdminApp() {
    let [role,setRole] = useState('user')
  return (
    <div>
        <button onClick={()=>setRole(role === 'user'?'admin':'user')}>Change role</button>
        <h3>Current role: {role}</h3>
        <ProtectedAdmin role={role}/>
        <UserProfile/>
    </div>
  )
}

export default AdminApp