import React, { useEffect, useState } from 'react'

function A() {
    let [a,setA]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(d=>d.json())
        .then(d=>setA(d))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        {
            a.map((d)=>{
                return(
                    <div key={d.id}>
                        <h4>{d.id}. {d.title}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default A