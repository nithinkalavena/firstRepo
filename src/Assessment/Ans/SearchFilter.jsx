import React, { useState } from 'react'

function SearchFilter() {
    let [search,setSearch] = useState('')
    let products = [
        'products',
        'mobile',
        'keyboard',
        'mouse',
        'monitor'
    ]
    let filteredProducts = products.filter(item=>item.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
        <h2>Product Search</h2>
        <input type="text" value={search} placeholder='search product' onChange={e=>setSearch(e.target.value)}/>
        {
            filteredProducts.map((item,index)=>(
                <li key={index}>{item}</li>
            ))
        }
    </div>
  )
}

export default SearchFilter