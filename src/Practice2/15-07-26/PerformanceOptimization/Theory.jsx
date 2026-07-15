import React from 'react'

function Theory() {
  return (
    <div>
        React is designed to update the UI efficiently. However, when a component's state or props change,
        React may re-render components. Sometimes these re-renders are necessary, but in many cases they are
        unnecessary and can affect performance, especially in large applications.

        To reduce unnecessary re-renders and expensive computations,
        React provides three important optimization tools:

        React.memo:
        React.memo is a Higher-Order Component (HOC) that memoizes a functional component. 
        It prevents the component from re-rendering if its props have not changed.
        Purpose:
        Prevent unnecessary re-renders of child components.
        Improve performance for components that render frequently but receive the same props.

        useMemo:
        useMemo is a React Hook that memoizes the result of an expensive computation.
        It recalculates the value only when one of its dependencies changes.
        Purpose:
        Avoid repeating expensive calculations on every render.
        Improve performance by reusing previously computed values.

        useCallback:
        useCallback is a React Hook that memoizes a function. Instead of creating a new function on every render, 
        it returns the same function reference until its dependencies change.
        Purpose:
        Prevent unnecessary recreation of functions.
        Useful when passing callback functions to memoized child components.
    </div>
  )
}

export default Theory