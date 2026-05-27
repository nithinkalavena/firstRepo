import React, { useState } from 'react'

function ShoppingCart() {
    const products = [
        {id:1,name:'Mobile',price:20000},
        {id:2,name:'Laptop',price:50000},
        {id:3,name:'Headphones',price:2000},
        {id:4,name:'Tab',price:4000},
        {id:5,name:'Television',price:35000}
    ]

    let [cart,setCart] = useState([])

    let addToCart = (product)=>{
        setCart([...cart,product])
        console.log(cart)
    }
    let removeCart = (index)=>{
        let updatedCart = cart.filter((_,i)=>i!==index)
        setCart(updatedCart)
    }
    let total = cart.reduce((sum,item)=>sum+item.price,0)
  return (
    <div>
    <div style={{padding:'20px'}}>
        <h2>Products</h2>
        <div id='prod'>        
        {
            products.map((item)=>(
                <div key={item.id}  id='displayPriod'>
                    <p>{item.name}</p>
                    <p>&#8377;{item.price}</p>
                    <button onClick={()=>addToCart(item)}>Add to Cart</button>
                </div>
            ))
        }
        </div>
        </div>
        <hr />
        <h2>Cart</h2>
        <div id='prod'>
        {cart.length===0 && <p>Your Cart is Empty</p>}
        {
            cart.map((item,index)=>(
                <div key={index} id='displayPriod'>
                    <p>
                        {item.name} - {item.price}
                    </p>
                    <button id='btn' onClick={()=>removeCart(index)}>Remove</button>
                </div>
            ))
        }        
    </div>
    <h3>Total : {total}</h3>
    </div>
  )
}

export default ShoppingCart