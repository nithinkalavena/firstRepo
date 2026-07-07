import React from 'react'

function Greet() {
    let greet = (name)=>{
        console.log(`Hello ${name}`)
    }
  return (
    <div style={{padding:'50px'}}>
        <button onClick={()=>greet('Nithin')}>Greet</button>
    </div>
  )
}

export default Greet