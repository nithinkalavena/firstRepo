import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function One() {
    let users = useSelector(state=>state.users)
    let loading = useSelector(state=>state.loading)
    let error = useSelector(state=>state.error)
    let dispatch = useDispatch()    

    let [search,setSearch] = useState('')

    let fetchUsers = async () =>{
        dispatch({type:'fetchStart'})
        try{
            let res = await fetch('https://jsonplaceholder.typicode.com/users')
            let data = await res.json()
            dispatch({type:'fetchSuccess',payload:data})
        }
        catch(err){
            dispatch({type:'fetchFail'})
        }
    }

    useEffect(()=>{fetchUsers},[])

    let filteredUsers = users.filter(u=>u.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
        <h2>UserList</h2>
        <input type="text" value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search user...'/>
        &nbsp;<button onClick={fetchUsers}>Refresh</button>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {
            filteredUsers.map(u=>(
                <div key={u.id}>
                    <p>{u.name}</p>
                    <p>{u.email}</p>
                    <button onClick={()=>dispatch({type:'deleteUser',payload:u.id})}>Delete</button>
                    <hr />
                </div>
            ))
        }
    </div>
  )
}

export default One