import React, { useEffect, useState } from 'react'
import axios from 'axios'

function A() {
    let [users,setUsers] = useState([])
    let [error,setError] = useState('')

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(a=>setUsers(a.data))
        .catch(error=>{
            setError('something went wrong')
            console.log(error)
        })
    },[])
  return (
    <div>
        <h2>User's List</h2>
        {error && <p>{error}</p>}

        <ul>
            {
                users.map((user)=>(
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))               
            }
        </ul>
    </div>
  )
}

export default A