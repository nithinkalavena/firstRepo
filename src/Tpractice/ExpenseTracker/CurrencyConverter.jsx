import React, { useState } from 'react'

function CurrencyConverter() {
    let [amount,setAmount] = useState('')
    let [result,setResult] = useState('')
    let convertCurrency = async ()=>{
        let response = await fetch('https://open.er-api.com/v6/latest/USD')
        let data = await response.json()
        let rate = data.rates.INR
        setResult(amount*rate)
    }
  return (
    <div>
        <h2>Currency Converter</h2>
        <input type="number" placeholder='Enter USD' value={amount} onChange={e=>setAmount(e.target.value)}/>
        <button onClick={convertCurrency}>Convert to INR</button>
        <h3>{result}</h3>
    </div>
  )
}

export default CurrencyConverter