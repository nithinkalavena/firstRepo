import React, { useState } from 'react'
function Users(){
    return <h2>User data</h2>
}
function Products(){
    return <h2>Products data</h2>
}
function WithLoading(Component){
    return function({loading}){
        if(loading)
            return <h2>Loading...</h2>
        return <Component/>
    }
}
let UserCom = WithLoading(Users)
let ProdCom = WithLoading(Products)
function LoadingApp() {
    let [loading,setLoading] = useState(true)
  return (
    <div>
        <button onClick={()=>setLoading(!loading)}>Change State</button>
        <UserCom loading={loading}/>
        <ProdCom loading={loading}/>
    </div>
  )
}

export default LoadingApp