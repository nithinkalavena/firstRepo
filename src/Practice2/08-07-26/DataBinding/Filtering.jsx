import React, { useState } from 'react'

function Filtering() {
    let [search,setSearch] = useState('')
    let products = ['Laptop','Mobile','Keyboard','Mouse','Monitor']
    let filteredProduct = products.filter(item=>item.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
        <h2>Product Search</h2>
        <input type="text" placeholder='Search product' value={search} onChange={e=>setSearch(e.target.value)}/>
        <br /><br />
        {filteredProduct.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
    </div>
  )
}

export default Filtering