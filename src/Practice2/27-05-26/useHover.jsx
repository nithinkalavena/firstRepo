import React, { useState } from 'react'

function useHover() {
  let [isHover,setIsHover] = useState(false)

  let hoverProps = {
    onMouseEnter:()=>setIsHover(true),
    onMouseLeave:()=>setIsHover(false)
  }
  return [isHover,hoverProps]
}

export default useHover