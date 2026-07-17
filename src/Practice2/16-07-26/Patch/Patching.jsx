import axios from 'axios'
import React from 'react'

function Patching() {
    let patched = {
        title:'PatchedTitle',
        body:'this is patched body'
    }
    axios
    .patch('https://jsonplaceholder.typicode.com/posts/1',patched)
    .then(res=>console.log(res.data))
  return (
    <div>

    </div>
  )
}

export default Patching