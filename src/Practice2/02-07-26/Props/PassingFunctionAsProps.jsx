import React from 'react'
import Child from './Child'

function PassingFunctionAsProps() {
    function showMessage(){
        alert('Hello from parent component')
    }
  return (
    <div>
        <Child sendMessage = {showMessage}/>
    </div>
  )
}

export default PassingFunctionAsProps