import React, { useState } from 'react'

function Child({message}){
    console.log(message)
    return <h2>{message}</h2>
}

function StateLift() {
    let [text,setText] = useState('Hello React')
  return (
    <div>
        {/* When multiple components need the same data, state is moved to their common
        parent and passed through props */}

        <Child message={text}/>
        {/* Used when:
        sibling components need same data
        parent controls child data */}
    </div>
  )
}

export default StateLift