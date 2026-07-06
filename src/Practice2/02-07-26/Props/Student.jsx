import React from 'react'

// function Student(props) {
//     console.log(props)
//   return (
//     <div>
//         <h3>Student Props</h3>
//         <h4>Name: {props.name}</h4>
//         <h4>Age: {props.age}</h4>
//         <h4>City: {props.city}</h4>
//     </div>
//   )
// }

// Instead of  writing props.name, props.age, props.city we can destructure

function Student({name,age,city,state}){
    return(
        <div>
            <h3>Student Props</h3>
            <h4>Name: {name}</h4>
            <h4>Age: {age}</h4>
            <h4>City: {city}</h4>
            <h4>State: {state}</h4>
        </div>
    )
}

export default Student