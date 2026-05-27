import React, { createContext, useState } from 'react'
import B from './B'
export let countContext = createContext()
function A() {
    let [count,setCount] = useState(0)
  return (
    <div>
        <countContext.Provider value={{count,setCount}}>
            <B/>
        </countContext.Provider>
    </div>
  )
}

export default A