import React from 'react'

function Theory() {
  return (
    <div>
        Redux is a state management library used to manage and share data across
        multiple components in a react app

        instead of passing data from parent - child - child (prop drilling),
        redux keeps the state in one central place called the store so any component
        can access or update it

        Redux is useful when:
        many components need the same data
        state becomes difficult to manage with only useState
        props are being passed through many levels
        app has complex state like authentication, cart, user data, api data,etc.,
    </div>
  )
}

export default Theory