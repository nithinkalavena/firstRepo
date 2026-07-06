import React from 'react'

function Theory() {
  return (
    <div>
        Prop drilling means passing data from one component to another through multiple intermediate components,
        even when those intermediate components do not need that data.
        Example:
        if App has data and grandChild needs it, but between them there is parent and child, then we may pass the
        same prop like this:
        App - Parent - Child - GrandChild
        here parent and child are only forwarding the prop.
        this is called prop drilling.
        Why prop drilling is a problem:-
        too much repeated prop passing.
        intermediate components may not use the data
        code becomes harder to read
        harder to maintain in big applications.
    </div>
  )
}

export default Theory