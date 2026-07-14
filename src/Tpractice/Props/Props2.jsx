import React from 'react'

function Props2({value}) {
    let {a,inc} = value
    console.log(a)
  return (
    <div>Props2
        <button onClick={inc}>Click</button>
        {a}
    </div>
  )
}

export default Props2