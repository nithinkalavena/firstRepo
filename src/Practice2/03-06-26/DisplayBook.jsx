import React, { useState } from 'react'

function DisplayBook() {
    let booksData = [
        {id:1,title:'java basics',author:'john'},
        {id:2,title:'React Guide',author:'David'},
        {id:3,title:'javascript mastery',author:'Mike'},
        {id:4,title:'SpringBoot',author:'Robert'}
    ]
    let [search,setSearch] = useState('')
    let [fav,setFav] = useState([])
    let filteredBooks = booksData.filter(book=>book.title.toLowerCase().includes(search.toLowerCase()))
    let toggleFav = (book) =>{
        let exist = fav.some(item=>item.id === book.id)
        if(exist)
            setFav(fav.filter(item=>item.id !== book.id))
        else
            setFav([...fav,book])
    }
  return (
    <div>
        <h2>Book Store</h2>
        <input type="text" placeholder='Search books...'
        value={search} onChange={e=>setSearch(e.target.value)}/>
        <h3>Books</h3>
        {
            filteredBooks.map(book=>(
                <div key={book.id}>
                    <p>{book.title} - {book.author}</p>
                    <button onClick={()=>toggleFav(book)}>{fav.some(item=>item.id === book.id) ? 'Remove Fav' : 'Add Fav'}</button>
                    <hr />
                </div>
            ))
        }
        <h3>Favorite Books</h3>
        {fav.length > 0 ?(
            fav.map(book=>(
                <p key={book.id}>{book.title}</p>
            ))
        ):(<p>No fav added</p>)}
    </div>
  )
}

export default DisplayBook