import React, { useContext } from 'react'
import { LoadingContext } from './AA'
import DD from './DD'
import CC from './CC'

function BB() {
    let {loading} = useContext(LoadingContext)
  return (
    <div>
        {loading && <DD/>}
        <CC/>
    </div>
  )
}

export default BB