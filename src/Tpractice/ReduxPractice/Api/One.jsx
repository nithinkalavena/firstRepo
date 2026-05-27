import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function One() {
    let users = useSelector(state=>state.users)
    let loading = useSelector(state=>state.loading)
    let error = useSelector(state=>state.error)
    let dispatch = useDispatch()

    useEffect(()=>{
        let getusers = async () =>{
            dispatch({type:'fetchStart'})
            try{
                let res = await fetch('https://jsonplaceholder.typicode.com/users')
                let data = await res.json()
                dispatch({type:'fetchSuccess', payload:data})
            }
            catch(err){
                dispatch({type:'fetchError'})
            }
        }
        getusers()
    },[dispatch])
  return (
    <div style={{textAlign:'center'}}>
        <h2>User List</h2>
        <hr/>        
        {loading && <p>loading...</p>}
        {error && <p>{error}</p>}
        {
            users.map((user)=>(
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <hr />
                </div>
            ))
        }
    </div>
  )
}

export default One