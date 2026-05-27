import React, { useState } from 'react'

function Expense() {
    let [transactions,setTransactions] = useState([])
    let [title,setTitle] = useState('')
    let [amount,setAmount] = useState('')

    let addTransaction = ()=>{
        let newTransaction = {
            id: Date.now(),
            title,
            amount: Number(amount)
        }
        setTransactions([...transactions,newTransaction])
        setTitle('')
        setAmount('')
    }
    let handleKeydown = (e)=>{
        if(e.key === 'Enter')
            addTransaction()
    }
    let total = transactions.reduce((sum,item)=>sum+item.amount,0)
  return (
    <div>
        <h1>Expense Tracker</h1>
        <h1>Total: {total}</h1>
        <input type="text" placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)} onKeyDown={handleKeydown}/><br /><br />
        <input type="number" placeholder='Amount' value={amount} onChange={e=>setAmount(e.target.value)} onKeyDown={handleKeydown}/><br /><br />
        <button onClick={addTransaction}>Add</button>
        {
            transactions.map(item=>(
                <p key={item.id}>
                    {item.title} - {item.amount}
                </p>
            ))
        }
    </div>
  )
}

export default Expense