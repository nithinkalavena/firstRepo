import React from 'react'

function OnChange() {
    let handleChange = (e)=> {
        console.log(e.target.value)
    }
  return (
    <div style={{padding:'20px'}}>
        {/* react automatically passes an event object to the handler */}
        <input type="text" placeholder='Enter text' onChange={handleChange}/>
    </div>
  )
}

export default OnChange