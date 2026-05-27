import React, { useCallback, useMemo, useState } from 'react'

let ProductCard = React.memo(({product,handleClick})=>{
    console.log('Rendering : ',product.name)
    return(
        <div style={{border:'1px solid black',margin:'10px',padding:'10px'}}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={()=>handleClick(product.name)}>Buy</button>
        </div>
    )
})
function ProductRendering() {
    let [count,setCount] = useState(0)

    let products = useMemo(()=>{
        return[
            {
                id:1,name:'laptop',price:50000
            },{
                id:2,name:'mobile',price:20000
            },{
                id:3,name:'keyboard',price:1000
            }
        ]
    },[])
    let handleClick=useCallback((name)=>{
        alert(name+' added')
    },[])
  return (
    <div>
        <h1>products</h1>
        <button onClick={()=>setCount(count+1)}>Count: {count}</button>
        {
            products.map(product=>(
                <ProductCard key={product.id} product={product} handleClick={handleClick}/>
            ))
        }
    </div>
  )
}

export default ProductRendering