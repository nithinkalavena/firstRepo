import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, moveToCart, moveToWishList, removeFromCart } from './Reducer'

let products = [
    {id:1,name:'Phone'},
    {id:2,name:'Laptop'},
    {id:3,name:'Headphones'}
]
function One() {
    let dispatch = useDispatch()
    let {cart,wishList} = useSelector(state=>state.shop)
  return (
    <div style={{textAlign:'center'}}>
        <h2>Products</h2>
        {
            products.map((item)=>(
                <div key={item.id}>
                    <p>{item.name}</p>
                    <button onClick={()=>dispatch(addToCart(item))}>Add to cart</button>
                </div>
            ))
        }
        <h2>Cart</h2>
        {
            cart.map((item)=>(
                <div key={item.id}>
                    <p>{item.name}</p>
                    <button onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button>&nbsp;&nbsp;

                    <button onClick={()=>dispatch(moveToWishList(item.id))}>Move to Wishlist</button>
                </div>
            ))
        }
        <h2>WishList</h2>
        {
            wishList.map((item)=>(
                <div key={item.id}>
                    <p>{item.name}</p>
                    <button onClick={()=>dispatch(moveToCart(item.id))}>Move to cart</button>
                </div>
            ))            
        }
    </div>
  )
}

export default One