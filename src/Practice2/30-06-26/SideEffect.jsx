import React from 'react'

function SideEffect() {
  return (
    <div>
        useEffect() is used to perform side effects in a functional component.
        a side effect is anything that happens outside of rendering the UI
        ex:
        fetching data from an api
        setting up a timer
        adding event listeners
        updating the document title
        reading/writing to local storage
    </div>
  )
}

export default SideEffect