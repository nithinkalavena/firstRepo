import React from 'react'
import MovieCard from './MovieCard'

function App() {
    let Movies = [
        {
            id:1,
            poster:'https://via.placeholder.com/180x200',
            name:'Leo',
            rating:4.5,
            genre:'Action'
        },
        {
            id:2,
            poster:'https://via.placehoder.com/180x200',
            name:'Salaar',
            rating:4.7,
            genre:'Action'
        },
        {
            id:3,
            poster:'https://via.placeholder.com/180x200',
            name:'Hi Nana',
            rating:4.3,
            genre:'Romance'
        },
        {
            id:4,
            poster:'https://via.placeholder.com/180x200',
            name:'Devara',
            rating:4.8,
            genre:'Action'
        }
    ]
  return (
    <div>
        <h2>Movie List</h2>
        <div style={{
        display:'flex',
        flexWrap:'wrap',    
    }}>
            {Movies.map(movie=>(
                <MovieCard 
                key={movie.id} 
                poster={movie.poster} 
                name={movie.name} 
                rating={movie.rating} 
                genre={movie.genre}/>
            ))}
        </div>
    </div>
  )
}

export default App