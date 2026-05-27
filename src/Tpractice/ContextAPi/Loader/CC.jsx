import React, { useContext } from 'react'
import { LoadingContext } from './AA'

function CC() {
    let {startLoading,stopLoading} = useContext(LoadingContext)
    let handleClick = ()=>{
        startLoading()
        setTimeout(()=>{
            stopLoading()
        },3000)
    }
  return (
    <div style={{textAlign:'center',marginTop:'100px'}}>
        <h2>Simulate API call</h2>
        <button onClick={handleClick}>Start Loading</button>
    </div>
  )
}

export default CC