import React, { useState } from 'react'

function FetchData() {
    let [data,setData] = useState([])
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(d=>d.json())
    .then(d=>setData(d))
    .catch(err=>console.log(err))
  return (
    <div>
        <h2>Fetched Data :</h2>
        {
            data.map(user=>(
                 <li key={user.id}>{user.name}-- {user.email}-- {user.address.city}</li>
            ))
        }
    </div>
  )
}

export default FetchData