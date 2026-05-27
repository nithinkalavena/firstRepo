import React, { useEffect, useState } from 'react'

function fetchP() {
    let [user,setUser] = useState([])
    useEffect(()=>{
        let getUser = async()=>{
            try{
                let res = await fetch('https://jsonplaceholder.typicode.com/users')
                let data = await res.json()
                setUser(data)
                console.log(data)
            }catch(err){
                console.log(err)
            }
        }
        getUser()        
    },[])
  return (
    <div>
        <h2>Fetch Users</h2>
        {user.map(user=>(
            <p key={user.id}>{user.name}</p>
        ))}
    </div>
  )
}

export default fetchP