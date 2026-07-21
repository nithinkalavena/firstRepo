import React from 'react'

function Theory() {
  return (
    <div>
        List rendering is the process of displaying multiple items from an array in the UI. 
        React commonly uses the JavaScript map() method to transform each item in an array into a JSX element.
        
        The key helps React:
        Identify which items have changed.
        Efficiently update the UI.
        Avoid unnecessary re-renders.
    </div>
  )
}

export default Theory