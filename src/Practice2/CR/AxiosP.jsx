import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AxiosP() {
    let [user,setUser] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')        
        .then(res=>setUser(res.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        <h2>Axios Users</h2>
        {
            user.map(user=>(
                <p key={user.id}>{user.name}</p>
            ))
        }
    </div>
  )
}

export default AxiosP