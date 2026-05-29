import React, { useCallback, useMemo, useState } from 'react'
import ProductCard from './ProductCard'

function App() {
    let [count,setCount] = useState(0)
    let [cart,setCart] = useState([])
    let products = useMemo(()=>[
        {id:1,name:'Laptop',price:50000},
        {id:2,name:'Phone',price:25000},
        {id:3,name:'Headphones',price:3000}
    ],[])
    let addToCart = useCallback((id)=>{
        setCart(prev=>[...prev,id])
    },[])
  return (
    <div>
        <h1>Products</h1>
        <button onClick={()=>setCount(count+1)}>Counter:{count}</button>
        <h2>Cart Items:{cart.length}</h2>
        {products.map(product=>(
            <ProductCard key={product.id} product={product} onAddToCart={addToCart}/>
        ))}        
    </div>
  )
}

export default App