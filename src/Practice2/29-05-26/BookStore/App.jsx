import React from 'react'
import BookCard from './BookCard'

function App() {
    let Books = [
        {
            id:1,
            cover:'https://via.placeholder.com/180x200',
            title:'Atomic Habits',
            author:'James Clear',
            price: 499
        },
        {
            id:2,
            cover:'https://via.placeholder.com/180x200',
            title:'Rich Dad Poor Dad',
            author:'Robert Kiyosaki',
            price: 399
        },
        {
            id:3,
            cover:'https://via.placeholder.com/180x200',
            title:'The Alchemist',
            author:'Paulo Coelho',
            price: 599
        },
        {
            id:4,
            cover:'https://via.placeholder.com/180x200',
            title:'Think and Groww Rich',
            author:'Napolean Hill',
            price: 450
        }
    ]
  return (
    <div>
        <center><h1>📚Book Store</h1></center>
        <div style={{
            display:'flex',
            flexWrap:'wrap'
        }}>
            {Books.map(book=>(
                <BookCard key={book.id} 
                cover={book.cover} 
                title={book.title} 
                author={book.author} 
                price={book.price}/>
            ))}
        </div>
    </div>
  )
}

export default App