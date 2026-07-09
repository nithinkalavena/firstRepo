import React, { useState } from 'react'

function CartItems() {
    let [items,setItems] = useState(['Apple','Banana','Mango'])
  return (
    <div>
        <button onClick={()=>setItems([])}>Clear Items</button>
        {
            items.length > 0 ? (
                <ul>
                    {items.map((items,index)=>(
                        <li key={index}>{items}</li>
                    ))}
                </ul>
            ):(
                <p>No items available</p>
            )
        }
    </div>
  )
}

export default CartItems