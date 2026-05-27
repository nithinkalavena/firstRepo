import React, { useEffect, useState } from 'react'

function UseFetch(url) {
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError] =useState(null)

    useEffect(()=>{
        fetch(url)
        .then(d=>d.json())
        .then((d)=>{
            setData(d)
            setLoading(false)
        })
        .catch((err)=>{setError(err)
            console.log(err)
        })
    },[])
 
  return {data,loading,error}
}

export default UseFetch