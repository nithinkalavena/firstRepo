import React, { useState } from 'react'

function RandomQuote() {
    let quotes = ['stay hungry','stay foolish',
        'code is like humor, when you have to explain it, its bad',
        'first, solve the problem. then write the code.','perfect practice makes perfect']
    let [quote,setQuote] = useState('')

    let generateQuote = ()=>{
        let random = Math.floor(Math.random()*quotes.length)
        setQuote(quotes[random])
    }
  return (
    <div style={{textAlign:'center',
        marginTop:'50px'}}>
        <h2>Random Quote Generator</h2>
        <p>{quote}</p>
        <button onClick={generateQuote}>Get Quote</button>
    </div>
  )
}

export default RandomQuote