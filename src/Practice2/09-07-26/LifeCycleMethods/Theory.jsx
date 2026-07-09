import React from 'react'

function Theory() {
  return (
    <div>
        The 3 main lifecycle phases are:
        Mounting: component is created and added to the dom
            main method: componentDidMount()
        Updating: component re-renders when state or props change
            main method: componentDidUpdate()
        Unmounting/removing: component is removed from the dom
            main method: componentWillUnmount()
    </div>
  )
}

export default Theory