import React from 'react'
import D from './D'

function C({value}) {
    // console.log(value)
  return (
    <div>C
        <D value = {value}/>
    </div>
  )
}

export default C