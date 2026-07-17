import React from 'react'

function Usage() {
  return (
    <div>
        Use useRef when you need to:
        Access DOM elements (focus, scroll, measure size).
        Store timer or animation IDs.
        Keep previous values.
        Store mutable data that shouldn't trigger a UI update.
        Hold references to external objects (for example, WebSocket or other library instances).
    </div>
  )
}

export default Usage