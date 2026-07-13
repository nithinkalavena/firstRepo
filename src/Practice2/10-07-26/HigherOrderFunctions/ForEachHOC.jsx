import React from 'react'

function ForEachHOC() {
    let fruits = ['Apple','Mango','Banana']
    fruits.forEach(fruit=>(
        console.log(fruit)
    ))
  return <h2>Check console</h2>
}

export default ForEachHOC