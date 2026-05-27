import { useCallback, useMemo, useState } from "react"
import React from "react"

let Child = React.memo(({onClick})=>{
    console.log('child rendered')
    return <button onClick={onClick}>Increment</button>
})

function App(){
    let [count,setCount] = useState(0)
    let [input,setInput] = useState('')
    //usememo heavy calculation
    let double = useMemo(()=>{
        console.log('calculating...')
        return count*2
    },[count])
    //usecallback 
    let handleClick = useCallback(()=>{
        setCount(prev=>prev+1)
    },[])
    return(
        <>
            <h2>Count: {count}</h2>
            <h3>Double: {double}</h3>
            <Child onClick={handleClick}/>
            <br /><br />
            {/* typing here should not re-render child */}
            <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="Type here"/>
        </>
    )
}
export default App