import React, { useState } from 'react'

function Pagination() {
    let data = [
        'Apple',
        'Banana',
        'Orange',
        'Mango',
        'Grapes',
        'Papaya',
        'Watermelon',
        'Kiwi',
        'Cherry'
    ]
    let itemsPerPage = 3
    let [currentPage,setCurrentPage] = useState(1)
    let totalPages = Math.ceil(data.length / itemsPerPage)
    let startIndex = (currentPage - 1)*itemsPerPage
    let endIndex = startIndex + itemsPerPage
    let currentItems = data.slice(startIndex,endIndex)
  return (
    <div>
        <h2 style={{padding:'20px'}}>Pagination App</h2>
        {currentItems.map((item,index)=>(
            <p key={index}>{item}</p>
        ))}
        <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1}>Previous</button>
        <span style={{margin:'10px'}}>Page {currentPage}</span>
        <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===totalPages}>Next</button>
    </div>
  )
}

export default Pagination