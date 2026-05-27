import React, { useEffect, useState } from 'react'
import useDebounce from './useDebounce'

function useDebounce1() {
    let [query,setQuery] = useState('')
    let debounceQuery = useDebounce(query,500)

    useEffect(()=>{
        if(debounceQuery)
            console.log('APi call for : ',debounceQuery)
    },[debounceQuery])
  return (
    <div>
        <input type="text" placeholder='Search...'
        value={query} onChange={e=>setQuery(e.target.value)}/>
    </div>
  )
}

export default useDebounce1