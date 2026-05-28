import React, { useReducer, useState } from 'react'
let initialState = {balance:0,history:[]}
function reducer(state,action) {
switch(action.type){
    case 'deposit':
        return{
            balance:state.balance+Number(action.payload),
            history:[...state.history,`Deposited: ${action.payload}`]
        }
    case 'withdraw':
            if(action.payload > state.balance){
                return{
                    ...state,
                    history:[...state.history,'Insufficient balance']
                }
            }
    return{
        balance:state.balance-Number(action.payload),
        history:[...state.history,`Withdrawn ${action.payload}`]
    }
        case 'reset':
            return initialState
        default:
            return state
}
}

function Banking() {
    let [amount,setAmount] = useState('')
    let [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div style={{textAlign:'center'}}>
        <h1>Banking App</h1>
        <h2>Balance: {state.balance}</h2>
        <input type="number" placeholder='Enter amount' value={amount} onChange={e=>setAmount(e.target.value)}/>
        <br /><br />
        <button onClick={()=>{
            dispatch({type:'deposit',payload:amount}) 
            setAmount('')}}>Deposit</button>&nbsp;&nbsp;
        <button onClick={()=>{
            dispatch({type:'withdraw',payload:amount}) 
            setAmount('')}}>Withdraw</button>&nbsp;&nbsp;
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        <h3>Transaction History</h3>
        {state.history.map((item,index)=>(
            <p key={index}>{item}</p>
        ))}
    </div>
  )
}

export default Banking