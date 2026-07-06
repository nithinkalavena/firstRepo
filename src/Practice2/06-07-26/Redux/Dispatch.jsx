import React from 'react'

function Dispatch() {
  return (
    <div>
        to update the state, we dispatch an action
        redux sends this action to the reducer, and reducer updates the store

        Redux flow:
        component - dispatch(action) - reducer - store updates - UI re-renders
    </div>
  )
}

export default Dispatch