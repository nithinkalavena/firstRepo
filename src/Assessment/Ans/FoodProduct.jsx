import React from 'react'

function FoodCard({image,name,price,rating}){
    return(
        <div style={styles.card}>
            <img src={image} alt={name} style={styles.image}/>
            <h3>{name}</h3>
            <p>&#8377;{price}</p>
            <p>&#11088;{rating}</p>
        </div>
    )
}
function FoodProduct() {
    let foodItems = [
        {
            id:1,
            name:'pizza',
            price:299,
            rating:4.5,
            image:'https://images.unsplash.com/photo-1513104890138-7c749659a591'
        },
        {
            id:2,
            name:'burger',
            price:149,
            rating:4.2,
            image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
        },
        {
            id:3,
            name:'pasta',
            price:199,
            rating:4.3,
            image:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        }
    ]
  return (
    <div>
        <h1>Food Products</h1>
        <div style={styles.container}>
            {foodItems.map(item=>(
                <FoodCard
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                rating={item.rating}/>
            ))}
        </div>
    </div>
  )
}
let styles = {
    container:{
        display:'flex',
        gap:'20px',
        flexWrap:'wrap'        
    },
    card:{
        border:'1px solid #ccc',
        padding:'15px',
        width:'220px',
        borderWidth:'10px',
        textAlign:'center',
        boxShadow:'0 2px 5px rgba(0,0,0,0.2'
    },
    image:{
        width:'100%',
        height:'150px',
        objectFit:'cover',
        borderRadius:'10px'
    }
}
export default FoodProduct