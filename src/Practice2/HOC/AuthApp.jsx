import React, { useState } from 'react'

function Dashboard(){
   return <h2>Dashboard Page</h2>
}
function Profile(){
    return <h2>Profile Page</h2>
}
function withAuth(Component){
    return function({isLoggedIn}){
        
        if(!isLoggedIn){
            return <h2>Please Login</h2>
        }
        return <Component/>
    }
}
let ProtectedDash = withAuth(Dashboard)
let ProtectedPfle = withAuth(Profile)
function AuthApp() {
    let [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <div>        
        <ProtectedDash isLoggedIn={isLoggedIn}/>
        <ProtectedPfle isLoggedIn={isLoggedIn}/>
        <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn?'Logout':'Login'}</button>
    </div>
  )
}

export default AuthApp