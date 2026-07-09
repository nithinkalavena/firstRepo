import React, { useState } from 'react'

function SimpleIf() {
    let [isLoggedIn,setIsLoggedIn] = useState(true)
    if(isLoggedIn)
        return <h1>Welcome user</h1>
    else
        return <h1>Please Login</h1>
}

export default SimpleIf