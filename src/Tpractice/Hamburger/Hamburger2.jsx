import React, { useState } from 'react'

function Hamburger2() {
    let [open,setOpen] = useState(false)
    
  return (
    <div>
        <div className="hamburger" onClick={()=>setOpen(!open)}>
            <div className={open?'line line1 open':'line'}></div>
            <div className={open?'line line2 open':'line'}></div>
            <div className={open?'line line3 open':'line'}></div>
        </div>
        {
            open && (
                <div className='menu'>
                    <a href="#"><p>Home</p></a>
                    <a href="#"><p>About</p></a>
                    <a href="#"><p>Contact</p></a>
                </div>
            )
        }
    </div>
  )
}

export default Hamburger2