import React from 'react'

function UseRef() {
  return (
    <div>
        useRef is a React Hook that lets you create a mutable reference that persists across renders. 
        Unlike state, updating a ref does not cause the component to re-render.

        Common Uses of useRef
        1. Accessing DOM Elements
        This is the most common use case.
        2. Storing Values Without Re-rendering
        Suppose you want to count button clicks but don't need the UI to update.
        3. Remembering Previous Values
        4. Storing Timer IDs
    </div>
  )
}

export default UseRef