import React from 'react'

function BookCard({cover,title,author,price}) {
  return (
    <div style={{
        border:'1px solid black',
        padding:'10px',
        margin:'10px',
        width:'220px',
        textAlign:'center',
        borderRadius:'5px'
    }}>
        <img src="cover" alt={title} />
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Price: {price}</p>
    </div>
  )
}

export default BookCard