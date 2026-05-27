import React, { useState } from 'react'

function ShoppingCart() {
    let [cart,setCart] = useState([
        'Pizza','Burger','Chicken roll','Salad','Bread'
    ])
    let removeItem  = (item)=>{
        setCart(cart.filter(i=>i !== item))
    }
  return (
    <div>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (<h3>Cart is Empty</h3>):(
            <div>
                {cart.map((item,index)=>(
                    <div key={index}>{item}&nbsp;&nbsp;
                    <button onClick={()=>removeItem(item)}>Remove</button><br /><br />
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default ShoppingCart