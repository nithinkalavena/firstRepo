import React, { useEffect, useState } from 'react'

function CustomFetch(url) {
    let [data,setData] = useState(null)
    let [loading,setLoading] = useState(true)
    let [error,setError] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then(d=>d.json())
        .then(d=>{
            setData(d)
            setLoading(false)})
        .catch((err)=>{
            setError(err)
            console.log(err)
        })
    },[])
  return {data,loading,error}
}

export default CustomFetch