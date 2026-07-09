import React from 'react'

function Theory() {
  return (
    <div>
        Conditional rendering in react means showing or hiding UI based on a condition
        {/* condition ? <Component/> : <Component/> */}
        using:
        show login/logout button
        show data only if available
        show error message if something went wrong
        show child component only when needed
        show loading spinner while fetching data
    </div>
  )
}

export default Theory