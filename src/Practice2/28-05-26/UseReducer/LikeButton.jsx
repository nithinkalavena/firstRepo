import React, { useState } from 'react'

function LikeButton() {
    let [posts,setPosts] = useState([
        {id:1,title:'Post 1',liked:false,likes:0},
        {id:2,title:'Post 2',liked:false,likes:0},
        {id:3,title:'Post 3',liked:false,likes:0}
    ])
    let handleLike = (id)=>{
        setPosts(posts.map(item=>(
            item.id === id ?{...item,liked:!item.liked,likes:item.liked ? item.likes-1:item.likes+1} : item
        )))
    }
  return (
    <div>
        <h1>Like Button System</h1>
        {posts.map(item=>(
            <div key={item.id}
            style={{border:'1px solid black',
                padding:'10px',
                marginBottom:'10px'
            }}>
                <h3>{item.title}</h3>
                <p>Likes: {item.likes}</p>
                <button onClick={()=>handleLike(item.id)}>{item.liked?'Unlike':'Like'}</button>
            </div>
        ))}
    </div>
  )
}

export default LikeButton