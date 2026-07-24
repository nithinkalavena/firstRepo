import React from 'react'

function ReactFiber() {
  return (
    <div>
        React Fiber is React's internal rendering and reconciliation engine
        that represents each component as a Fiber object, breaks rendering 
        into interruptible units of work, prioritizes updates, and efficiently 
        applies only the necessary changes to the DOM.

        A Fiber is a JavaScript object that represents a single React element (component, DOM node, text node, etc.).

        Advantages of React Fiber
        Interruptible rendering: React can pause and resume rendering work.
        Prioritized updates: More important interactions (like typing) can be processed first.
        Smoother user experience: Less chance of the UI freezing during large updates.
        Foundation for modern React features: Fiber enables capabilities such as concurrent rendering, Suspense, and transitions.
    </div>
  )
}


export default ReactFiber