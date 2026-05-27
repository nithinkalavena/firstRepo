import React, { useMemo, useState } from 'react'
import C from './C'

const B = React.memo(({value}) => {
    console.log('b component')
    let [b,setB]=useState(11)
    let b2 = useMemo(()=>{
        console.log('use memo')        
        return b*10
    },[b])
    console.log(b2)
  return (
    <div>
        <button onClick={()=>setB(b+1)}>Click B</button> <br />
        {b}
        <br /> Use Memo cal : {b2}
        <C/>
    </div>
  )
})

export default B