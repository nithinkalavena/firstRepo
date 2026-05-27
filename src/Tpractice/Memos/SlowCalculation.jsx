import React, { useMemo, useState } from 'react'

function SlowCalculation() {
    let [count,setCount] = useState(0)
    let [text,setText] = useState('')

    let slowFunction = (num)=>{
        console.log('calculating...')
        for(let i=0; i<1000000000; i++)
            {}return num*2
    }
    let result = useMemo(()=>{
        return slowFunction(count)},[count])
  return (
    <div>
        <h2>Result : {result}</h2>
        <button onClick={()=>setCount(count+1)}>Inc</button><br /><br /><hr />
        <input type="text" value={text} onChange={e=>setText(e.target.value)}/> <br /><br />
        {/* {text} */}
    </div>
  )
}

export default SlowCalculation