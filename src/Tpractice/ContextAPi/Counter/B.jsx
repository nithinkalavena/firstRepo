import React from 'react'
import D from './D'
import C from './C'

function B() {
  return (
    <div style={{textAlign:'center',marginTop:'100px'}}>
        <h2>Global Counter</h2>
        <D/>
        <C/>
    </div>
  )
}

export default B