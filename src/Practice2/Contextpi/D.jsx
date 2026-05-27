import React, { useContext } from 'react'
import { context } from './A'

function D() {
  let {a,inc} = useContext(context)
  console.log(a)
  return (
    <div>D
        value of a : {a}
    </div>
  )
}

export default D