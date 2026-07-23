import React from 'react'

function NestedDestructure() {
    let user = {
        name:'Nithin',
        address:{
            city:'Pdpl',
            zip:505212
        }
    }
    let {address:{city}} = user
    console.log(city)
  return (
    <div>
        <h4>Destructuring the nested object</h4>
    </div>
  )
}

export default NestedDestructure