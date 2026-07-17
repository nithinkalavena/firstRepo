import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AsyncAwait() {
    let [users,setUsers] = useState([])
    useEffect(()=>{
        getUsers()
    },[])
    async function getUsers(){
        try{
            let res = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            )
            setUsers(res.data)            
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        {/* Instead of .then(), modern React projects often use async/await for cleaner code */}
        <h1>list of users</h1>
        {
            users.map(user=>(
                <p key={user.id}>{user.name}</p>
            ))
        }
    </div>
  )
}

export default AsyncAwait