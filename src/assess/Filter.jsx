import React, { useState } from 'react'

function Filter() {
    let [search,setSearch] = useState('')
    let items=['apple','mango','Banana','Orange','Grapes']
    let filered = items.filter(item=>item.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
        <input type="text" name="" id="" value={search} onChange={e=>setSearch(e.target.value)} />
        {
            filered.map((item,index)=>(
                <li key={index}>{item}</li>
            ))
        }
    </div>
  )
}

export default Filter