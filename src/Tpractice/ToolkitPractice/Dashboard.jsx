import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './AuthSlice'

function Dashboard() {
    let dispatch = useDispatch()
    let user = useSelector(state=>state.auth.user)
  return (
    <div>
        <h2>Welcome {user?.email}</h2>
        <button onClick={()=>dispatch(logout())}>Logout</button>

    </div>
  )
}

export default Dashboard