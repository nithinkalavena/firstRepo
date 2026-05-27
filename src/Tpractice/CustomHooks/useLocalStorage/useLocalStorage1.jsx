import React from 'react'
import useLocalStorage from './useLocalStorage'

function useLocalStorage1() {
    let [name,setName] = useLocalStorage('name','')
  return (
    <div>
        <input type="text" placeholder='Enter name' 
        value={name} onChange={e=>setName(e.target.value)}/>
        <h1>Hello, {name}</h1>
    </div>
  )
}

export default useLocalStorage1