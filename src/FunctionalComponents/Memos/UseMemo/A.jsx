import React, { useMemo, useState } from 'react'

function A() {
    let [count,setCount] = useState(10)
    let [number,setNumber] = useState(2)

    let fact =(n)=>{
        let answer = 1
        for (let index = n; index >= 1; index--) {
            answer*=index            
        }
        console.log('factorial function called')
        return answer
    }

    let factorial = useMemo(()=>fact(number),[number])
    
  return (
    <div>
        <center>
            Counter : {count}
            <br /><br />
            <button onClick={()=>setCount(count+1)}>Increase</button>  <hr /> <br />

            
            Number : {number} <br /> <br />
            Factorial of {number} : {factorial} <br /> <br />
            <button onClick={()=>setNumber(number+1)}>Number Inc</button><hr />
        </center>
    </div>
  )
}

export default A