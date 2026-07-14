import React, { useEffect, useState } from 'react'

function ApiFetch() {
    let [data,setData] = useState([])
    let [loading,setLoading] = useState(true)
    let [error,setError] = useState('')
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res=>res.json())
        .then(res=>{
            setData(res)
            setLoading(false)
        })
        .catch(err=>{
            setError('something went wrong')
            setLoading(false)
        })
    },[])
    if(loading) return <h2>Loading...</h2>
    if(error) return <h2>{error}</h2>
  return (
    <div>
        {
            data.map(user=>(
                <p key={user.id}>{user.name}</p>
            ))
        }
    </div>
  )
}

export default ApiFetch