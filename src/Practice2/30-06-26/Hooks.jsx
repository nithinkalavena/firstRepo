import React, { useEffect, useId, useState } from 'react'

function Hooks() {
    let [count,setCount] = useState(0)
    useEffect(()=>{
        console.log('Component mounted')
    },[count])
    useEffect(()=>{
        let timer = setInterval(() => {
            console.log('running....')
        }, 5000);
        return ()=>clearInterval(timer)
    },[])
    let id = useId()
    console.log(id)
  return (
    <div>
        <p>Before Hooks: state and lifecycle methods were only available in class components
        after hooks: functional components can also use state and lifecycle features.
        Rules of hooks:
        call hooks only at the top level
        don't call hooks inside loops, conditions or nested functions
        call hooks only inside react functional components or custom hooks</p>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase</button>        
        Hooks are built in functions that let functional components use state and other react features
        without writing class components.
    </div>
  )
}

export default Hooks