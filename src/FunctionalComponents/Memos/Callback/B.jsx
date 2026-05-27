import React from 'react'

function B({value}) {
    console.log('child rendered')
  return (
    <div>
        <button onClick={value}>Button</button>
    </div>
  )
}

export default React.memo(B)