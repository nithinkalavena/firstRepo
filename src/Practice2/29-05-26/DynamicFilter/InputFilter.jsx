import React, { useState } from 'react'

function InputFilter() {
    let Products = [
        {id:1,name:'Laptop',price:50000},
        {id:1,name:'Phone',price:25000},
        {id:1,name:'Headphones',price:500},
        {id:1,name:'Smart Watch',price:7000},
    ]
    let [search,setSearch] = useState('')
    let filteredItems = Products.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
        <center><h1>Product Search</h1>
        <input type="text" value={search} 
        onChange={e=>setSearch(e.target.value)} 
        placeholder='Search Product...' style={{height:'30px',width:'300px'}}/>
        {filteredItems.map(item=>(
            <div style={{
                border:'1px solid black',
                margin:'10px',
                padding:'10px',
                width:'200px',
                textAlign:'center',
                borderRadius:'5px'               
            }} key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
            </div>
        ))}</center>
    </div>
  )
}

export default InputFilter