import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from './SearchSlice'

function Search() {
    let dispatch = useDispatch()
    let searchTerm = useSelector(state=>state.search.searchItem)
    let products = [
        'Laptop',
        'Mobile',
        'Keyboard',
        'Mouse',
        'Monitor'
    ]
    let filteredProducts = products.filter(product=>product.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div>
        <h1>Product Search</h1>
        <input type="text" placeholder='Search Product...' value={searchTerm} onChange={e=>dispatch(setSearchTerm(e.target.value))}/>
        <ul>
            {filteredProducts.map((product,index)=>(
                <li key={index}>{product}</li>
            ))}
        </ul>
    </div>
  )
}

export default Search