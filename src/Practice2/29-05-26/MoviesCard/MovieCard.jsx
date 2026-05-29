import React from 'react'

function MovieCard({poster,name,rating,genre}) {
  return (
    <div
    style={{
        border:'1px solid black',
        padding:'20px',
        margin:'10px',
        width:'200px',
        textAlign:'center',
        borderRadius:'5px',
        background:'lightgray'
    }}>
        <img src="poster" alt={name} />
        <h3>{name}</h3>
        <p>{rating}</p>
        <p>{genre}</p>
        {rating >= 4.5 ? <p>💥Top Rated</p>:'🔥Super Hit'}
    </div>
  )
}

export default MovieCard