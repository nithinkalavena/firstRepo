import React, { useState } from 'react'

function useInput(initialValue=0) {
    let [value,setValue] = useState(initialValue)

    let handleChange = (e)=>{
        setValue(e.target.value)
    }
  
    let clear = ()=>{
        setValue('')
    }
    return {value,handleChange,clear}
}

export default useInput