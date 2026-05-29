import React from 'react'

let ProductCard = React.memo(({product,onAddToCart})=>{
    console.log('Rendering:',product.name)
    return(
        <div style={{
            border:'2px solid black',
            padding:'10px',
            margin:'10px'
        }}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={()=>onAddToCart(product.id)}>Add to Cart</button>
        </div>
    )
})
export default ProductCard