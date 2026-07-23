import React from 'react'

function Theory() {
  return (
    <div>
        Lazy loading in React is a performance optimization technique where components or
        modules are loaded only when they are needed, instead of loading everything when the application first starts.

        Home
        About
        Dashboard
        Settings

        Without lazy loading:
        All page components are downloaded when the app loads.
        Initial page load becomes slower.

        With lazy loading:
        Only the Home component is loaded initially.
        Other components (About, Dashboard, Settings) are downloaded only when the user navigates to them.
        This reduces the initial bundle size and improves page load speed.

        React.lazy() tells React that the component should be loaded dynamically.
        When React first needs the component, it downloads its JavaScript file.
        While the file is loading, Suspense displays the fallback UI.
    </div>
  )
}

export default Theory