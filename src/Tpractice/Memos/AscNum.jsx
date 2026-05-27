import React, { useMemo, useState } from 'react'

function AscNum() {
    let [numbers,setNumbers] = useState([90,5,2,9,1,7,0,3,22,6])
    let [count,setCount] = useState(0)

    let sortedNumbers = useMemo(()=>{
        console.log('sorting...')
        return [...numbers].sort((a,b)=>a-b)
    },[])
  return (
    <div>
        <h2>Sorted Numbers</h2>
        <p>{sortedNumbers.join(',')}</p>

        <button onClick={()=>setCount(count+1)}>Re-render {count}</button>
    </div>
  )
}

export default AscNum