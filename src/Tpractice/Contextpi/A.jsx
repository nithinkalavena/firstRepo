import React, { createContext, useState } from 'react'
import B from './B'

export let context = createContext()
function A() {

    let [a,setA] = useState(10)
    let inc = ()=>{
        setA(a+1)
    }
  return (
    <div>A <br />
        <button onClick={inc}>Click</button>
        <context.Provider value = {{a,inc}}>
            <B/>
        </context.Provider>        
    </div>
  )
}

export default A