import React from 'react'

function Theory() {
  return (
    <div>
        To prop drilling, react provides context api.
        context api allows us to share data directly with deeply nested
        components without passing props manually at entry level.
        Main parts of context api:
        createContext() -- creates a context
        Provider -- provides data to components
        useContext() -- consumes/accesses the data
    </div>
  )
}

export default Theory