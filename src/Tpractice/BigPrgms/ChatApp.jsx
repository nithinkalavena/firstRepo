import React, { useState } from 'react'

function ChatApp() {
    let [message,setMessage] = useState('')
    let [chat,setChat] = useState([])
    let sendMessage = ()=>{
        if(message.trim()==='') return
        setChat([...chat,{text:message,sender:'me'}])
        setMessage('')       
    }
    let sendEnter = (e)=>{
        if(e.key === 'Enter'){            
        sendMessage()
        setMessage('')
        }
    }
  return (
    <div style={{width:'300px',margin:'auto'}}>
        <h2>Chat App</h2>
        <div style={{border:'1px solid #ccc',height:'300px',overflowY:'auto'}}>
            {
                chat.map((msg,index)=>(
                    <p key={index} style={{textAlign:msg.sender === 'me'?'right':'left'}}>
                        {msg.text}
                    </p>
                ))
            }
        </div>
        <input type="text" value={message} onChange={e=>setMessage(e.target.value)} onKeyDown={sendEnter}/> &nbsp;
        <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default ChatApp