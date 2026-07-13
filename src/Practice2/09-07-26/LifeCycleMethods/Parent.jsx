import React, { Component, useEffect, useState } from 'react'
function Child(){
    let [count,setCount] = useState(0)
    useEffect(()=>{
        console.log('Child mounted')

        return ()=>{
        console.log('Count unmounted')
    }
    },[])
    
    useEffect(()=>{
        if(count>0)
            console.log('count updated:',count)
    },[count])
    return(
        <div style={{border:'1px solid black',padding:'10px',marginTop:'10px',background:'lightgray'}}>
            <h2>Child component</h2>
            <h3>count: {count}</h3>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}
function Parent(){
    let [show,setShow] = useState(false)
    return(
        <div style={{padding:'20px'}}>
            <h1>React functional lifecycle example</h1>
            <button onClick={()=>setShow(!show)}>{show ? 'Hide child' : 'Show child'}</button>
            {show && <Child/>}
        </div>
    )
}
export default Parent