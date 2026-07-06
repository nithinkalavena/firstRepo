import React, { createContext, useContext, useState } from 'react'

let userContext = createContext()

function Child(){
    let {user,setUser} = useContext(userContext)
    console.log(setUser)    
    return(
        <>
            <h2>User: {user}</h2>
            <button onClick={()=>setUser('Nithin')}>Change name</button>
        </>
    )
}
function GlobalContext() {
    let [user,setUser] = useState('John')
  return (
    <userContext.Provider value={{user,setUser}}>
        {/* When state needs to be shared across many components, react's contextapi can be used */}
        <Child/>
    </userContext.Provider>
  )
}

export default GlobalContext