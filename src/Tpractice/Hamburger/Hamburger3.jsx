import React, { useState } from 'react'

function Hamburger3() {
    let [open,setOpen] = useState(false)
  return (
    <div>
        {
            open && <div className="overlay" onClick={()=>setOpen(false)}></div>
        
        }
        
            <div className="hamburger" onClick={()=>setOpen(!open)}>
                <div className={open?'line line1 open':'line line1'}></div>
                <div className={open?'line line2 open':'line line2'}></div>
                <div className={open?'line line3 open':'line line3'}></div>
            </div>
        
        <div className={open?'sidebar active':'sidebar'}>
            <p>Home</p>
            <p>About</p>
            <p>Project</p>
            <p>Contact</p>
        </div>
    </div>
  )
}

export default Hamburger3