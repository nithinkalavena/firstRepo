import React from 'react'

function PreventDefault() {
    let handleSbmt = (e)=>{
        e.preventDefault()
        alert('form submitted')
    }
  return (
    <div>
        <form action="" onSubmit={handleSbmt}>
            <input type="text" />&nbsp;&nbsp;
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default PreventDefault