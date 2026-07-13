import React from 'react'

function Theory() {
  return (
    <>
      a fragments lets you group multiple jsx elements without adding an extra html element to the dom
      normally, a react component must return one parent element.
      <h1>Hello</h1>
      <p>Welcome</p>
      {/* used to return multiple elements without extra dom nodes
      helps keep html clean
      improves dom structure
      useful in tables, lists and layout */}
    </>
  )
}

export default Theory