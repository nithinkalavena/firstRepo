import React, { useState } from 'react'

function Hamburger() {
    let [isOpen,setIsOpen] = useState(false)
  return (
    <div className='App'>
        <div className="hamburger" onClick={()=>setIsOpen(!isOpen)}>
            <div className={isOpen?'line open':'line'}></div>
            <div className={isOpen?'line open':'line'}></div>
            <div className={isOpen?'line open':'line'}></div>
        </div>

        <div className={isOpen?'menu active':'menu'}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    
  )
}

export default Hamburger