import React from 'react'

function ReusableWrapperFunction() {
    function withMessage(callback) {
        return function(){
            alert('button clicked')
            console.log('working')
            callback()
        }
    }
    function sayHello(){
        alert('hello nithin')
    }
    // here withMessage() takes another function as argument
    // and returns a new function
    // so it is a higher-order function
  return (
    <div>
        <button onClick={withMessage(sayHello)}>Click Here</button>
    </div>
  )
}

export default ReusableWrapperFunction