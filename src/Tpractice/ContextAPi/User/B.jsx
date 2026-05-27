import React, { useContext } from 'react'
import { AuthContext } from './A'
import D from './D'
import C from './C'

function B() {
    let {user } = useContext(AuthContext)
  return (
    <div>
        {user ? <D/> : <C/>}
    </div>
  )
}

export default B