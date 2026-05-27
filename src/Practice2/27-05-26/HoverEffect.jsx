import React from 'react'
import useHover from './useHover'

function HoverEffect() {
    let [isHover,hoverProps] = useHover()
  return (
    <div>
        <div {...hoverProps} style={{
            width:'200px',height:'100px',
            background:isHover?'green':'gray',color:'white',textAlign:'center',lineHeight:'100px'
        }}>
            {isHover?'Mouse Inside':'Hover me'}
        </div>
    </div>
  )
}

export default HoverEffect