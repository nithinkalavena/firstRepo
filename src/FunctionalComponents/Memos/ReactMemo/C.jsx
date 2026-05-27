import React, { useState } from 'react'

const C = React.memo(() => {
    console.log('c component')
    let [c,setC] = useState(20)
  return (
    <div>
        <button onClick={()=>setC(c+1)}>Click C</button> <br />
        {c}
    </div>
  )
})

export default C