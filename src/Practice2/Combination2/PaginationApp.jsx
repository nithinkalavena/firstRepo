import React, { useEffect, useState } from 'react'

function PaginationApp() {
    let [data,setData] = useState([])
    let [page,setPage] = useState(1)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
        .then(res=>res.json())
        .then(res=>setData(res))
    },[page])
  return (
    <div><center>
        <h2>Page: {page}</h2>
        {data.map(item=>(
            <p key={item.id}>{item.title}</p>
        ))}
        <button onClick={()=>setPage(page-1)} disabled={page===1}>Prev</button>&nbsp;&nbsp;
        <button onClick={()=>setPage(page+1)} disabled={page===20}>Next</button></center>
    </div>
  )
}

export default PaginationApp