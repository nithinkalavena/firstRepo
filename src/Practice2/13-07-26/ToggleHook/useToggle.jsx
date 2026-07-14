import React, { useState } from 'react'

function useToggle(initialValue = false) {
  let [isOn,setIsOn] = useState(initialValue)
  let toggle =()=>{
    setIsOn(prev=>!prev)
  }
  return [isOn, toggle]
}

export default useToggle