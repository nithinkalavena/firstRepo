import React, { useState } from 'react'

function SearchFilter() {
    let [search,setSearch] = useState('')
    let items = ['laptop','mouse','CPU','keyBoard','Pendrive']
    let filtered = items.filter(item=>item.toLowerCase().includes(search.toLowerCase()))
        
    
  return (
    <center>
        <div>
        <input type="text" value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search here...'/> <br /> <br />
        {
            filtered.map((item)=>(
                <li>{item}</li>
            ))
        }
    </div>
    </center>
  )
}
export default SearchFilter