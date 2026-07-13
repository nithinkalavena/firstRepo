import React from 'react'

function EventHandlerHOC() {
    function handleClick(message){
        return function (){
            alert(message)
        }
    }
  return (
    <div>
        <button onClick={handleClick('Hello Nithin')}>Click me</button>
        {/* HandleClick returns another function
        so it is a higher order function */}
    </div>
  )
}

export default EventHandlerHOC