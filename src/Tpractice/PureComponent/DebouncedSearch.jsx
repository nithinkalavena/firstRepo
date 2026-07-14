import React, { useEffect, useMemo, useState } from 'react'

function DebouncedSearch() {
    let items =[
        'Laptop','Phone','Keyboard','Mouse','Monitor'
    ]
    let [search,setSearch] = useState('')
    let [debouncedSearch,setDebouncedSearch] = useState('')
    useEffect(()=>{
        let timer = setTimeout(() => {
            setDebouncedSearch(search)
        }, 500);
        return ()=> clearInterval(timer)
    },[search])

    let filteredItems = useMemo(()=>{
        return items.filter(item=>item.toLowerCase().includes(debouncedSearch.toLowerCase()))
    },[debouncedSearch])
  return (
    <div>
        <input type="text" placeholder='Search item' value={search} onChange={e=>setSearch(e.target.value)}/>
        {
            filteredItems.map((item,index)=>(
                <p key={index}>{item}</p>
            ))
        }
    </div>
  )
}

export default DebouncedSearch