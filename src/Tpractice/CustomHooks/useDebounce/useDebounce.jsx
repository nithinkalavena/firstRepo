import React, { useEffect, useState } from 'react'

function useDebounce(value,delay) {
    let [debounceValue,setDebounceValue] = useState(value)

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setDebounceValue(value)
        },delay)

        return()=>{
            clearTimeout(timer)
        }
    },[value,delay])
  return debounceValue
}

export default useDebounce