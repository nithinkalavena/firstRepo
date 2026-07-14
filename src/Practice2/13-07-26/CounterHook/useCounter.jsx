import React, { useState } from 'react'

function useCounter(initialValue = 0) {
    let [count,setCount] = useState(initialValue)

    let increment = ()=> setCount(count+1)
    let decrement = ()=> setCount(count-1)
    let reset = ()=> setCount(initialValue)

    return { count, setCount, increment, decrement, reset}
}

export default useCounter