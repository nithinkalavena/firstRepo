import React, { useState } from 'react'

function Charcount() {
    let [text,setText] = useState('')    
  return (
    <div>
        <h2>Character Counter</h2>
        <textarea name="" value={text} 
        onChange={e=>setText(e.target.value)} 
        placeholder='Type Something...' id=""/>
        <p>Characters: {text.length}</p>
    </div>
  )
}

export default Charcount