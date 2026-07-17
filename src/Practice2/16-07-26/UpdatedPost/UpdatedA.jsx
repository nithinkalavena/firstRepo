import axios from 'axios'
import React from 'react'

function UpdatedA() {
    let updatedPost = {
        name:'Nithin',
        age:25,
    }
    axios
    .put('https://jsonplaceholder.typicode.com/posts/1',updatedPost)
    .then(res=>console.log(res.data))
  return (
    <div>UpdatedA</div>
  )
}

export default UpdatedA