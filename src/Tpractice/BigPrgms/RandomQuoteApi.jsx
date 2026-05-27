import React, { useState } from 'react'

function RandomQuoteApi() {
    let [quote,setQuote] = useState([])

    let genQuote = ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(d=>d.json())
        .then(d=>setQuote(d))
        .catch(err=>console.log(err))
    }
  return (
    <div style={{textAlign:'center',
        marginTop:'50px'
    }}>
        <h2>Quote Generator (API)</h2>
        {
            quote.map((d)=>(
            <h4 key={d.id}>{d.title}</h4>
        ))
        }
        <button onClick={genQuote}>Get Quote</button>
    </div>
  )
}

export default RandomQuoteApi