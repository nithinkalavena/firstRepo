import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Users() {
    let [users,setUsers] = useState([])
    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => setUsers(response.data))        
        .catch(err=>console.error(err))        
    },[])
  return (
    <div>
        <h2>Users</h2>
        {
            users.map(user=>(
                <p key={user.id}>{user.name}</p>
            ))
        }
    </div>
  )
}

export default Users