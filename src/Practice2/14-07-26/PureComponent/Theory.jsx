import React from 'react'

function Theory() {
  return (
    <div>
        A Pure Component is a React component that re-renders only when its props or state actually change.
        It performs a shallow comparison of the current and previous props and state before deciding whether to render again.

        This helps improve performance by avoiding unnecessary re-renders.
    </div>
  )
}

export default Theory