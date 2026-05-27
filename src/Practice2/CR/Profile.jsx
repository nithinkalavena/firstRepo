import React, { useState } from 'react'

function Profile() {
    let [isLoggedIn,setLoggedIn] = useState(false)
    let [status,setStatus] = useState('idle')
    let [showProfile,setShowProfile] = useState(false)

    if(!isLoggedIn){
        return(
            <div style={{textAlign:'center',marginTop:'50px'}}>
                <h2>Please Login</h2>
                <button onClick={()=>setLoggedIn(true)}>Login</button>
            </div>
        )
    }
  return (
    <div>
        <h2>Welcome to Dashboard</h2>
        <button onClick={()=>setLoggedIn(false)}>Logout</button>
        <hr />        
            <h3>Data Status:</h3>
            {status === 'idle' && <p>Click below to load data</p>}
            {status === 'loading' && <p>Loading...</p>}
            {status === 'success' && <p>Data loaded successfully</p>}
            {status === 'error' && <p>Error loaing data</p>}
            <button onClick={()=>setStatus('loading')}>Load</button>
            <button onClick={()=>setStatus('success')}>Success</button>
            <button onClick={()=>setStatus('error')}>Error</button>
            <hr />
            <button onClick={()=>setShowProfile(!showProfile)}>{showProfile?'HideProfile':'ShowProfile'}</button>
            {
                showProfile && (
                    <div>
                        <h4>User profile</h4>
                        <p>Name: Nithin</p>
                        <p>Role: Developer</p>
                    </div>
                )
            }
    </div>
  )
}

export default Profile