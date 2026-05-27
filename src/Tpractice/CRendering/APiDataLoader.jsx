import React, { useEffect, useState } from 'react'

function APiDataLoader() {
    let [data,setData] = useState([])
    let [loading,setLoading] = useState(true)
    let [error,setError] = useState('')

    useEffect(()=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
        .then(d=>d.json())
        .then(d=>{
            setData(d)
            setLoading(false)
        })
        .catch(err=>{
            setError('Failed to fetch')
            setLoading(false)
        })
        }, 2000);
    },[])
    if(loading){
        return(
            <div>
                <div className="spinner"></div>
            </div>
        )
    }
    if(error) return <h3>{error}</h3>
  return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
        <ul>
            {
                data.map((item)=>(
                    <li key={item.id} style={{listStyle:'none'}}>{item.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default APiDataLoader