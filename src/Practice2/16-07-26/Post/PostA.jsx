import axios from 'axios'
import React from 'react'

function PostA() {
    let newPost = {
        title:'React',
        body:'Learning APi',
        id:1
    }
    axios
    .post('https://jsonplaceholder.typicode.com/posts',newPost)
    .then(res=>console.log(res.data))
  return (
    <div>
        <h2>Purpose: Send new data to the server.</h2>
        <h3>Posted Data seen on console</h3>        
    </div>
  )
}

export default PostA