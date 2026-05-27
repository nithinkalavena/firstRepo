import React, { createContext, useState } from 'react'
import B from './B'

export let AuthContext = createContext()
function A() {
    let [user,setUser] = useState(null)
    
    let login = (name)=>{
        setUser(name)
    }
    let logout = ()=>{
        setUser(null)
    }
  return (
    <div>
        <AuthContext.Provider value={{user,login,logout}}>
            <B/>
        </AuthContext.Provider>
    </div>
  )
}

export default A