import axios from 'axios'
import React from 'react'

function Deleted() {
    axios
    .delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(()=>console.log('Deleted successfully'))
  return (
    <div>Deleted</div>
  )
}

export default Deleted