import React, { useMemo, useState } from 'react'

let Child = ({items})=>{
    return(
        <ul>
            {
                items.length === 0?(
                    <h3>No Results found</h3>                    
                ):(
                    items.map((item,index)=><li key={index}>{item}</li>)
                )
            }
        </ul>
    )
}
function SearchFilter() {
    let [search,setSearch] = useState('')
    let data = ['apple','banana','orange','mango','grapes']
    let filteredData = useMemo(()=>{
        console.log('filtering...')
        return data.filter(item=>item.toLowerCase().includes(search.toLowerCase()))
    },[search])
  return (
    <div>
        <input type="text" 
        placeholder='search fruit...'
        value={search} onChange={e=>setSearch(e.target.value)}/>
        <Child items={filteredData}/>
    </div>
  )
}

export default SearchFilter