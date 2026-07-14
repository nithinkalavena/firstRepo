import React, { useCallback, useMemo, useState } from 'react'

let ProductCarder = React.memo(({product,onSelect})=>{
    console.log('Rendering:', product.name)
    return (
        <div>
            <h3>{product.name}</h3>
            <button onClick={()=>onSelect(product)}>Select</button>
        </div>
    )   
})
function ProductCard() {
    let [search,setSearch] = useState('')
    let products = [{id:1,name:'Laptop'},{id:2,name:'Phone'},{id:3,name:'Keyboard'}]
    let filteredProducts = useMemo(()=>{
        return products.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    },[search])
    let handleSelect = useCallback((product)=>{
        alert('Selected Product is '+product.name)
    },[])
  return (
    <div>
        <input type="text" value={search} placeholder='Search' onChange={e=>setSearch(e.target.value)}/>
        {
            filteredProducts.map(product=>(
                <ProductCarder key={product.id} product={product} onSelect={handleSelect}/>
            ))
        }
    </div>
  )
}

export default ProductCard