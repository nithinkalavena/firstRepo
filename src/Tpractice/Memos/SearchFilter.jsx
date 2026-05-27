import React, { useCallback, useMemo, useState } from 'react'

let userData = [
        'Lenovo','dell','hp','mac','laptop'
    ]
function SearchFilter() {
    let [search,setSearch] = useState('')

    let handleChange = useCallback((e)=>{
        setSearch(e.target.value)
    },[])

    let filteredUsers = useMemo(()=>{
        console.log('filtering...')
        return userData.filter(user=>user.toLowerCase().includes(search.toLowerCase()))
    },[search])
  return (
    <div style={{textAlign:'center',marginTop:'40px'}}>
        <h2>Search Users</h2>
        <input type="text" placeholder='search here...' value={search} onChange={handleChange} 
        style={{padding:'8px',width:'200px'}}/>
        <ul>
            {
                filteredUsers.map((user,index)=>(
                    <li key={index} style={{listStyle:'none'}}>{user}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default SearchFilter