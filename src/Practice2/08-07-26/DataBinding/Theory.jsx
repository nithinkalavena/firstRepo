import React from 'react'

function Theory() {
  return (
    <div>
        {/* Data binding in react means connecting data with the UI, so that data can be
        displayed in the screen and updated based on user actions or state changes */}
        types of data binding:
        one-way data binding
        react mainly uses one-way data binding
        means:
        data flows from component state to ui
        ui displays whatever value is present in the state/props
        if state changes, react re-renders the ui
        two-way data binding
        Reactdoes not have automatic two-way binding like angular, but we can achieve
        similar behaviour using:
        value
        onChange
        useState
        working:
        value={username} binds state to input field
        onChange updates the state whenever user types
        {username} shows updated value immediately
    </div>
  )
}

export default Theory