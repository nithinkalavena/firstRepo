import React from 'react'

function Theory() {
  return (
    <div>
        The Virtual DOM (VDOM) is a lightweight, in-memory representation of the real browser DOM.

        Instead of directly updating the browser's DOM whenever data changes, React:

        Creates a virtual copy of the UI in memory.
        Updates this virtual copy when state or props change.
        Compares the new Virtual DOM with the previous one (diffing).
        Updates only the changed parts in the real DOM (reconciliation).

        Virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to compare
        UI changes through a diffing algorithm and updates only the necessary parts of the real DOM,
        improving rendering performance.
    </div>
  )
}

export default Theory