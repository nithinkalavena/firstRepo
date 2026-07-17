import React, { useEffect, useState } from 'react'

function Users() {
    let [user,setUser] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>setUser(data))
        .catch(err=>console.log(err))
    },[])
    console.log(user)
  return (
    <div>
        <h2>Users</h2>
        {
            user.map(users=>(
                <p key={users.id}>{users.id}.{users.name}</p>
            ))
        }
    </div>
  )
}

export default Users