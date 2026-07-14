import React from 'react'
import C from './C'

function B({value}) {
  return (
    <div>B
        <C value = {value}/>
    </div>
  )
}

export default B