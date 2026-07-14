import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
let reducer = (state,action)=>{
        switch (action.type){
            case 'inc':
                return {count:state.count+1}
            case 'dec':
                return {count:state.count-1}
            case 'reset':
                return {count:0}
            default:
                return state
        }
    }
    let Child = React.memo(({onClick,value})=>{
        console.log('child rendered')
        return (
            <div>
                <h3>Child value: {value}</h3>
                <button onClick={onClick}>Click child</button>
            </div>
        )
    })
function CombinationPro() {
    let [name,setName] = useState('')
    let [show,setShow] = useState(true)
    let [state,dispatch] = useReducer(reducer,{count:0})

    useEffect(()=>{
        console.log('component mounted/updated')
    },[state.count])

    let expensiveCal = (num)=>{
        console.log('calculating...')
        return num*1000
    }
    let memoValue = useMemo(()=>{
        return expensiveCal(state.count)
    },[state.count])

    let handleChildClick = useCallback(()=>{
        alert('child button clicked')
    },[])
  return (
    <div>
        <h1>React all concepts demo</h1>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='Enter name'/>
        <h2>Hello {name}</h2>
        
            <button onClick={()=>setShow(!show)}>Toggle child</button>
            {
                show && <Child onClick={handleChildClick} value={memoValue}/>
            }
            <h2>Count: {state.count}</h2>
            <button onClick={()=>dispatch({type:'inc'})}>+</button>
            <button onClick={()=>dispatch({type:'dec'})}>-</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default CombinationPro